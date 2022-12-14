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
     valordesconto} = request.body;
     console.log(nome,
        descricao,
        ingredientes,
        valor_unitario,
        imagem,
        valor,
        valordesconto)

     const createProdutosUseCase = new CreateProdutosUseCase();
     const produto = await createProdutosUseCase.execute({
      nome,
      descricao,
      ingredientes,
      valor_unitario,
      imagem,
      valor,
      valordesconto
     })

     return response.status(201).json(produto);
 }
}