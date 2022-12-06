import { Request, Response } from "express";
import { GetProdutosUseCase } from "./getProdutosUseCase";


export class GetProdutosController{
 async handle(request:Request,response:Response){
    const getProdutosUseCase = new GetProdutosUseCase();
    const getProdutos = await getProdutosUseCase.execute();
    return response.status(200).json(getProdutos);
 }
}