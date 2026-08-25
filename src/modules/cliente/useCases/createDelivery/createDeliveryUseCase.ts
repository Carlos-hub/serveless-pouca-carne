import { stringify } from "querystring";
import { prisma } from "../../../../databse/prismaClient";

interface ICreateDelivery{
 id_produto: string;
 preco:number;
 id_cliente:string;
 cliente_numero:string;
 forma_pagamento:string;
}
export class CreateDeliveryUseCase{

 async execute({id_produto,preco,id_cliente,cliente_numero,forma_pagamento}:ICreateDelivery){
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const sufixo = Math.random().toString(36).slice(2, 6).toUpperCase();

  const client = await prisma.clientes.findFirst({
    where:{
      id:{
        equals: id_cliente
      }
    }
  })
  const codPedido = `PED-${year}${month}${day}-${sufixo}`

  const endereco = await prisma.endereco.findFirst({
    where:{
      id_cliente:{
        equals:id_cliente
      }
    }
  })
  console.log(endereco);
  if(endereco != null){
    try{
    const produto = await prisma.produtos.findFirst({
      where:{
        id:{
          equals:id_produto
        }
      }
    })
    if(produto != null){
      try{
        const cadastraPedido = await prisma.pedidos.create({
          data:{
            nome: produto.nome,
            id_produto,
            preco,
            id_cliente,
            cliente_numero,
            forma_pagamento,
            cod_pedido:codPedido,
            id_cliente_endereco:endereco?.id,
            cliente_endereco: endereco?.nome_rua,
            id_entregador:"",
            status: "pendente"
          }
         })
         return cadastraPedido;
      }catch(err){
        console.log(err)
      }
    }else{
      throw new Error("produto não existe");
    }
    }catch(err){
      console.log(err)
    }
  }else{
    throw new Error("endereco não existe");
  }
 }
}