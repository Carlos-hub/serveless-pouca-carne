import { Request, Response } from "express";
import { CancelaPedidosUseCase } from "./CancelaPedidosUseCase";



export class CancelaPedidosController{
  async handle(request:Request,response:Response){
   const {id} = request.body;
   const cancelaPedidosUseCase = new CancelaPedidosUseCase();
   cancelaPedidosUseCase.execute(
    id
   )
   return cancelaPedidosUseCase;
  }
}