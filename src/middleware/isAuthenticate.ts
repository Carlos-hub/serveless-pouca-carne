import { NextFunction, Request, Response } from "express";
import { decode } from "jsonwebtoken";
export async function isAuthenticate(
 request: Request,
 response: Response,
 next:NextFunction
){
  const token = request.body;
  const isAuth = decode(token,{complete: true})
}