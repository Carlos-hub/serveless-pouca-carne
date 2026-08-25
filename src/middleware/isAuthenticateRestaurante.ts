import { NextFunction, Request, Response } from "express";
import { verify, JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "../config/auth";
import { prisma } from "../databse/prismaClient";

export async function isAuthenticateRestaurante(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { token }: string | string[] | undefined | any = request.headers;

  if (!token) {
    throw new Error("Access Denied");
  }

  let payload: JwtPayload;

  try {
    payload = verify(token, JWT_SECRET) as JwtPayload;
  } catch {
    throw new Error("Access Denied");
  }

  // token de cliente não pode acessar rotas do restaurante
  const usuario = await prisma.usuarios.findFirst({
    where: { id: payload.sub as string },
  });

  if (!usuario) {
    throw new Error("Access Denied");
  }

  request.user_id = usuario.id;
  next();
}
