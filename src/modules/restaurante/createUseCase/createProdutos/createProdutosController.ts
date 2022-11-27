import { Request, Response } from "express";
import { CreateProdutosUseCase } from "./createProdutosUseCase";


export class CreateProdutosController{
 async handle(request:Request,response:Response){
    const{
     nome,
     descricao,
     ingredientes,
     valor_unitario,
     imagem,
     valor,
     valorDesconto} = request.body;

     const createProdutosUseCase = new CreateProdutosUseCase();
     const produto = await createProdutosUseCase.execute({
      nome,
      descricao,
      ingredientes,
      valor_unitario,
      imagem,
      valor,
      valorDesconto
     })

     return response.status(201).json(produto);
 }
}