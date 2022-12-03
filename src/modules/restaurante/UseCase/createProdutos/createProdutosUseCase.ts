import { prisma } from "../../../../databse/prismaClient";

interface ICreateProdutos{
 nome:string;
 descricao:string;
 ingredientes:string;
 valor_unitario:string;
 imagem:string;
 valor:number;
 valordesconto:number;
}


export class CreateProdutosUseCase{
  async execute({nome,descricao,ingredientes,valor_unitario,imagem,valor,valordesconto}:ICreateProdutos){
     // valida se o produto existe
      const produtoExist = await prisma.produtos.findFirst({
       where:{
        nome
       }
      });
      if(produtoExist){
       throw new Error("Product Already exists");
      }
     // cadastra o produto

     const produto = await prisma.produtos.create({
      data:{
       nome,
       descricao,
       ingredientes,
       valor_unitario,
       imagem,
       valor,
       valordesconto
      }
     })
     return produto;

  }
}