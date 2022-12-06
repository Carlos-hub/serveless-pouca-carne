import { Request, Response } from "express"
import { CreateEnderecoUseCase } from "./createEnderecoUseCase";

export class CreateEnderecoController{

 async handle(request:Request,response:Response){
  const {nome_rua,cep,id_cliente} = request.body;
  const createEndereco = new CreateEnderecoUseCase();
  try{
    const endereco = createEndereco.execute({
       nome_rua,
       cep,
       id_cliente
    })
    return response.status(201).json(endereco);
  }catch(err){
    console.log(err);
  }
 }
}