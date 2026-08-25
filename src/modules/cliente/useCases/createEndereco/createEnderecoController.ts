import { Request, Response } from "express"
import { CreateEnderecoUseCase } from "./createEnderecoUseCase";

export class CreateEnderecoController{

 async handle(request:Request,response:Response){
  const {nome_rua,cep} = request.body;
  const id_cliente = request.user_id;
  const createEndereco = new CreateEnderecoUseCase();
  const endereco = await createEndereco.execute({
     nome_rua,
     cep,
     id_cliente
  })
  return response.status(201).json(endereco);
 }
}
