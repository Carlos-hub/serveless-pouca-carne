import { Request, Response } from "express";
import { GetPedidosUseCase } from "./getPedidosUseCase";

export class GetPedidosController{
 async handle(request:Request,response:Response){
  const getPedidosUseCase = new GetPedidosUseCase();
  const getPedidos = await getPedidosUseCase.execute();
  return response.status(200).json(getPedidos);
 }
}