import { Request, Response } from "express";
import { GetProdutosClientUseCase } from "./getProdutosClientUseCase";


export class GetProdutosClientController{
 async handle(request:Request,response:Response){
    const getProdutosClientUseCase = new GetProdutosClientUseCase();
    const getProdutosClient = await getProdutosClientUseCase.execute();
    return response.status(200).json(getProdutosClient);
 }
}