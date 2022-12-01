import { Request, Response } from "express";
import { CancelaPedidosUseCase } from "./CancelaPedidosUseCase";



export class CancelaPedidosController{
  async handle(request:Request,response:Response){
   const {id} = request.body;
   const cancelaPedidosUseCase = new CancelaPedidosUseCase();
   console.log(id)
   cancelaPedidosUseCase.execute(
    id
   )
   return response.status(202).json(cancelaPedidosUseCase);
  }
}