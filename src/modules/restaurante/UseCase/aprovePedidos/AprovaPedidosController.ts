import { Request, Response } from "express";
import { AprovaPedidosUseCase } from "./AprovaPedidosUseCase";



export class AprovaPedidosController{
  async handle(request:Request,response:Response){
   const {id} = request.body;
   console.log(id)
   const aprovaPedidosUseCase = new AprovaPedidosUseCase();
   aprovaPedidosUseCase.execute(
    id
   )
   return response.status(200).json(aprovaPedidosUseCase);
  }
}