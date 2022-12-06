import { prisma } from "../../../../databse/prismaClient";

interface ICreateEndereco{
 nome_rua:string;
 cep:string;
 id_cliente:string;
}

export class CreateEnderecoUseCase{

 async execute({nome_rua,cep,id_cliente}:ICreateEndereco){
   const client = await prisma.clientes.findFirst({
    where:{
     id:{
      equals:id_cliente
     }
    }
   });
   if(client){
    const endereco = await prisma.endereco.create({
     data:{
      nome_rua,
      cep,
      id_cliente
     }
   });
   return endereco;
   }else{
    throw new Error("Client don't exists!");
   }
   
 }
}