import { Request, Response } from "express";
import { GetPedidosClientUseCase } from "./getPedidosClientUseCase";



export class GetPedidosClientController{
  async handle(request:Request,response:Response){
   const {id}= request.body;
   const getPedidosUseCase = new GetPedidosClientUseCase();
   const getPedidos = await getPedidosUseCase.execute(id);
   return response.status(200).json(getPedidos);
}
}