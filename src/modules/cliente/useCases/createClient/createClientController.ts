import { Request,Response } from "express";
import { CreateClientUseCase } from "./createClientUseCase";


export class CreateClientController{
   async handle(request:Request,response:Response){
    const {nome,email,cpf,telefone,datanascimento,senha} = request.body;
    const createClientUseCase = new CreateClientUseCase();
    const result = await createClientUseCase.execute({
     nome,
     email,
     cpf,
     telefone,
     datanascimento,
     senha
    })
    return response.status(201).json(result);
   }
}