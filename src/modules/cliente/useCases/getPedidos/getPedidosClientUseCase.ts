import { prisma } from "../../../../databse/prismaClient";


export class GetPedidosClientUseCase{

 async execute(id:string){
   const client = await prisma.clientes.findFirst({
    where:{
     id:{
      equals:id
     }
    }
   })
   if(client){
    try{
      const pedidos = await prisma.pedidos.findFirst({
       where:{
        id_cliente:{
         equals:id
        }
       }
      });
      return pedidos;
    }catch(err){
      console.log(err);
    }
   }
 }
}