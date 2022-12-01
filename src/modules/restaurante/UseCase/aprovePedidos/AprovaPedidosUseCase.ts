import { prisma } from "../../../../databse/prismaClient";

interface IAprovaPedidos{
  id:string;
}

export class AprovaPedidosUseCase{
   async execute(id:string){
    const updatePedidos = await prisma.pedidos.update({
     where:{
      id
     },
     data:{
      status: 'Confirmado'
     }
    })
    return updatePedidos;
   }
}