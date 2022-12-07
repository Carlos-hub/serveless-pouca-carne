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
      const pedidos = await prisma.pedidos.findMany({
       where:{
        id_cliente:{
         equals:id
        }
       }
      });
      console.log(pedidos)
      return pedidos;
    }catch(err){
      console.log(err);
    }
   }
 }
}