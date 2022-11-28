/*
  Warnings:

  - You are about to drop the column `nome_cliente` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `nome_entregador` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `quantidade` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `telefone_entregador` on the `pedidos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "pedidos" DROP COLUMN "nome_cliente",
DROP COLUMN "nome_entregador",
DROP COLUMN "quantidade",
DROP COLUMN "telefone_entregador";
