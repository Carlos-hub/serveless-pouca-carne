import { prisma } from "../../../../databse/prismaClient";



export class GetPedidosUseCase{

 async execute(){
  const getPedidos = await prisma.pedidos.findMany({take:50})
  return getPedidos;
 }
}