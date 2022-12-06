import { prisma } from "../../../../databse/prismaClient";


export class CancelaPedidosUseCase{
   async execute(id:string){

    const updatePedidos = await prisma.pedidos.update({
     where:{
      id
     },
     data:{
      status: "Cancelado"
     }
    })
    return updatePedidos;
   }
}