import { prisma } from "../../../../databse/prismaClient";

interface IUpdateProdutos{
  id:string;
  nome:string;
  descricao:string;
  ingredientes:string;
  valor_unitario:string;
  imagem:string;
  valor:number;
  valordesconto:number;
}


export class UpdateProdutosUseCase{
  async execute({id,nome,descricao,ingredientes,valor_unitario,imagem,valor,valordesconto}:IUpdateProdutos){
     // valida se o produto existe
      const produtoExist = await prisma.produtos.findFirst({
       where:{
        id
       }
      });
      if(!produtoExist){
       throw new Error("Product not Exist");
      }
     // cadastra o produto

     const produto = await prisma.produtos.update({
      where:{
        id
      },
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