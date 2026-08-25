import { Request, Response } from "express";
import { GetDataClientUseCase } from "./getDataClienteUseCase";


export class GetDataClientController{
 async handle(request:Request,response:Response){
  const id = request.user_id;
  const getDataClientUseCase = new GetDataClientUseCase();
  const getData = await getDataClientUseCase.execute({ id });
  return response.status(200).json(getData);
 }
}
