import { Request, Response } from "express";
import { GetDataClientUseCase } from "./getDataClienteUseCase";


export class GetDataClientController{
 async handle(request:Request,response:Response){
  const id = request.body;
  console.log(id);
  // return response.json("ok")
  const getDataClientUseCase = new GetDataClientUseCase();
  const getData = await getDataClientUseCase.execute(id);
  return response.status(202).json(getData);
 }
}