import { prisma } from "../../../../databse/prismaClient";


export class CancelaPedidosUseCase{
   async execute(id:string){
      const now = Date();
      
   // const getHour = await prisma.pedidos.findUnique({
   //    where:{
   //       id
   //    },
   //    select:{
   //       created_at: true
   //    }
   // })

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