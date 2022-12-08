/*
  Warnings:

  - You are about to drop the column `clientesId` on the `pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `produtosId` on the `pedidos` table. All the data in the column will be lost.
  - Made the column `clientesId` on table `endereco` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "endereco" DROP CONSTRAINT "endereco_clientesId_fkey";

-- DropForeignKey
ALTER TABLE "pedidos" DROP CONSTRAINT "pedidos_clientesId_fkey";

-- DropForeignKey
ALTER TABLE "pedidos" DROP CONSTRAINT "pedidos_produtosId_fkey";

-- AlterTable
ALTER TABLE "endereco" ALTER COLUMN "clientesId" SET NOT NULL;

-- AlterTable
ALTER TABLE "pedidos" DROP COLUMN "clientesId",
DROP COLUMN "produtosId";
