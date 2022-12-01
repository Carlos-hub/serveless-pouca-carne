import { prisma } from "../../../../databse/prismaClient";

export class CancelaPedidosUseCase{
   async execute(id:string){
    const cancelaPedidosRes = await prisma.pedidos.update({
     where:{
      id
     },
     data:{
      status: "Cancelado"
     }
    })
    return cancelaPedidosRes;
   }
}