import { prisma } from "../../../../databse/prismaClient";



export class GetProdutosClientUseCase{
  async execute(){
    const getProdutosClient = await prisma.produtos.findMany({take:10});
    return getProdutosClient;
  }
}