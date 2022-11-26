import { Request, Response } from "express";
import { createEntregadorUseCase } from "./createEntregadorUseCase";



export class CreateEntregadorController{
  async handle(request:Request,response:Response){
   const {nome,email,cpf,telefone,senha} = request.body
   const createClientUseCase = new createEntregadorUseCase();
   const entregador = await createClientUseCase.execute({
    nome,
    email,
    cpf,
    telefone,
    senha
   })
   return response.status(201).json(entregador)
  }
}