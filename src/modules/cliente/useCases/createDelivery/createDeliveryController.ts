import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./createDeliveryUseCase";

export class CreateDeliveryController{

 async handle(request:Request,response:Response){
  const { 
   id_produto,
   preco,
   cliente_numero,
   forma_pagamento,
   } = request.body;

   const createDeliveryUseCase = new CreateDeliveryUseCase();
   const createDelivery = await createDeliveryUseCase.execute({
    id_produto,
    preco: Number(preco),
    id_cliente: request.user_id,
    cliente_numero,
    forma_pagamento
   })
    return response.status(201).json(createDelivery);
 }
}
