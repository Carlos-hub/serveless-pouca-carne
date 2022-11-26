import { Request,Response } from "express";
import { AuthenticateClientUseCase } from "./authenticateClientUseCase";

export class AuthenticateClientController{
   async handle(request:Request,response:Response){
       const {email, senha} = request.body;

       const authenticateClientUseCase = new AuthenticateClientUseCase();

       const result = await authenticateClientUseCase.execute({
         email,
         senha
       });
       return response.json(result)
   }
}