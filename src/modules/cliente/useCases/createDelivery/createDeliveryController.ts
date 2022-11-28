import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./createDeliveryUseCase";

export class CreateDeliveryController{

 async handle(request:Request,response:Response){
  const { 
   id_produto,
   preco,
   id_cliente,
   cliente_numero,
   forma_pagamento,
   } = request.body;

   const createDeliveryUseCase = new CreateDeliveryUseCase();
   const createDelivery = await createDeliveryUseCase.execute({
    id_produto,
    preco,
    id_cliente,
    cliente_numero,
    forma_pagamento
   })
    return response.status(201).json(createDelivery);
 }
}