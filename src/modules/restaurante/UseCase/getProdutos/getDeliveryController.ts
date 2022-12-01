import { Request, Response } from "express";
import { GetDeliveryUseCase } from "./getDeliveryUseCase";


export class GetDeliveryController{
 async handle(request:Request,response:Response){
    const getDeliveryUseCase = new GetDeliveryUseCase();
    const getDelivery = await getDeliveryUseCase.execute();
    return response.status(200).json(getDelivery);
 }
}