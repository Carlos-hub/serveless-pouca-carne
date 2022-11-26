/*
  Warnings:

  - You are about to drop the `Clientes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Endereco` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Entregador` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pedidos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Produtos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Restaurante` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Endereco" DROP CONSTRAINT "Endereco_id_cliente_fkey";

-- DropForeignKey
ALTER TABLE "Pedidos" DROP CONSTRAINT "Pedidos_id_cliente_fkey";

-- DropForeignKey
ALTER TABLE "Pedidos" DROP CONSTRAINT "Pedidos_id_produto_fkey";

-- DropTable
DROP TABLE "Clientes";

-- DropTable
DROP TABLE "Endereco";

-- DropTable
DROP TABLE "Entregador";

-- DropTable
DROP TABLE "Pedidos";

-- DropTable
DROP TABLE "Produtos";

-- DropTable
DROP TABLE "Restaurante";

-- CreateTable
CREATE TABLE "clientes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedidos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "cod_pedido" TEXT NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "nome_cliente" TEXT NOT NULL,
    "id_produto" INTEGER NOT NULL,
    "cliente_numero" TEXT NOT NULL,
    "id_cliente_endereco" INTEGER NOT NULL,
    "cliente_endereco" TEXT NOT NULL,
    "forma_pagamento" TEXT NOT NULL,
    "telefone_entregador" INTEGER NOT NULL,
    "nome_entregador" TEXT NOT NULL,
    "id_entregador" INTEGER NOT NULL,
    "produtosId" INTEGER NOT NULL,

    CONSTRAINT "pedidos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "restaurante" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "restaurante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "ingredientes" TEXT NOT NULL,
    "valor_unitario" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entregador" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "entregador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "endereco" (
    "id" SERIAL NOT NULL,
    "nome_rua" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "id_cliente" INTEGER NOT NULL,

    CONSTRAINT "endereco_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clientes_id_key" ON "clientes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "produtos_id_key" ON "produtos"("id");

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "endereco" ADD CONSTRAINT "endereco_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
