import { Request, Response } from "express";
import { UpdateProdutosUseCase } from "./updateProdutosUseCase";


export class UpdateProdutosController{
 async handle(request:Request,response:Response){
    const{
        id,
        nome,
        descricao,
        ingredientes,
        valor_unitario,
        imagem,
        valor,
        valordesconto} = request.body;

     const updateProdutosUseCase = new UpdateProdutosUseCase();
     const produto = await updateProdutosUseCase.execute({
        id,
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