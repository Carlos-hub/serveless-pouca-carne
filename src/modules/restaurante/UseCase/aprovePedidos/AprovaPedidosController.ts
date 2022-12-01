import { Request, Response } from "express";
import { AprovaPedidosUseCase } from "./AprovaPedidosUseCase";



export class AprovaPedidosController{
  async handle(request:Request,response:Response){
   const {id} = request.body;
   const aprovaPedidosUseCase = new AprovaPedidosUseCase();
   aprovaPedidosUseCase.execute(
    id
   )
   return response.status(201).json(aprovaPedidosUseCase);
  }
}