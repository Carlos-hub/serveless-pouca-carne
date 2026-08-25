import { NextFunction, Request, Response } from "express";
import { verify, JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "../config/auth";

export async function isAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { token }: string | string[] | undefined | any = request.headers;

  if (!token) {
    throw new Error("Access Denied");
  }

  try {
    // verify (e não decode) valida a assinatura e a expiração do token
    const payload = verify(token, JWT_SECRET) as JwtPayload;
    // o id do usuário vem sempre do token, nunca de um header enviado pelo cliente
    request.user_id = payload.sub as string;
    next();
  } catch {
    throw new Error("Access Denied");
  }
}
