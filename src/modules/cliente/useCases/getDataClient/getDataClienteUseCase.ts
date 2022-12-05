import { prisma } from "../../../../databse/prismaClient";

interface IGetDataClient{
 id:string;
}
export class GetDataClientUseCase{
 async execute({id}:IGetDataClient){
   const client = await prisma.clientes.findFirst({
    where:{
     id:{
      equals:id
     }
    }
   });
   const clientReturn = {
    id : client?.id,
    nome: client?.nome,
    email: client?.email,
    cpf: client?.cpf,
    telefone:client?.telefone,
    dataNascimento: client?.datanascimento
   }
   return clientReturn;
 }
}