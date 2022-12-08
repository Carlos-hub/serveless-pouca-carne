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
   const clientLocation = await prisma.endereco.findFirst({
    where:{
      id
    }
   })
   const clientReturn = {
    id : client?.id,
    nome: client?.nome,
    email: client?.email,
    cpf: client?.cpf,
    telefone:client?.telefone,
    dataNascimento: client?.datanascimento,
    endereco:clientLocation?.nome_rua,
    cep:clientLocation?.cep
   }
   return clientReturn;
 }
}