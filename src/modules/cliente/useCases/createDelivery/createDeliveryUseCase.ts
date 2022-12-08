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
  let date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const client = await prisma.clientes.findFirst({
    where:{
      id:{
        equals: id_cliente
      }
    }
  })
  const codPedido = `PED${year}${month}${day} ${client?.nome}`
  const nome = `PED${year}${month}${day} ${client?.nome}`

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
            nome,
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