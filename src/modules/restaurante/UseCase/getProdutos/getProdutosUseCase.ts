import { prisma } from "../../../../databse/prismaClient";



export class GetProdutosUseCase{
  async execute(){
    const getProdutos = await prisma.produtos.findMany({take:50});
    return getProdutos;
  }
}