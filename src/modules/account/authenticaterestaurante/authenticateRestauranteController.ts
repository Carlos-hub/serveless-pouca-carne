import { Request,Response } from "express";
import { AuthenticateRestauranteUseCase } from "./authenticateClientUseCase";

export class AuthenticateRestauranteController{
   async handle(request:Request,response:Response){
       const {email, senha} = request.body;

       const authenticateRestauranteUseCase = new AuthenticateRestauranteUseCase();

       const result = await authenticateRestauranteUseCase.execute({
         email,
         senha
       });
       return response.json(result)
   }
}