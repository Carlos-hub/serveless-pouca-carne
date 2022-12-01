import { prisma } from "../../../../databse/prismaClient";



export class GetDeliveryUseCase{
  async execute(){
    const getDelivery = await prisma.produtos.findMany({take:10});
    return getDelivery;
  }
}