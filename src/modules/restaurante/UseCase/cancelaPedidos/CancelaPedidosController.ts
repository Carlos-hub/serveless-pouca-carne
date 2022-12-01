import { Request, Response } from "express";
import { CancelaPedidosUseCase } from "./CancelaPedidosUseCase";



export class CancelaPedidosRestauranteController{
  async handle(request:Request,response:Response){
   const {id} = request.body;
   console.log(id)
   const cancelaPedidosUseCase = new CancelaPedidosUseCase();
   cancelaPedidosUseCase.execute(
    id
   )
   return response.status(200).json(cancelaPedidosUseCase);
  }
}