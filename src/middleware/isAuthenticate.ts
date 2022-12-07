import { NextFunction, Request, Response } from "express";
import { decode } from "jsonwebtoken";
export async function isAuthenticate(
 request: Request,
 response: Response,
 next:NextFunction
){
  const {token}: string | string[] | undefined | any = request.headers;
  const isAuth = decode(token,{complete: true})
  if(isAuth){
    next();
  }else{
    throw new Error("Access Denied");
  }
}