/*
  Warnings:

  - You are about to drop the column `produtosId` on the `pedidos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "pedidos" DROP COLUMN "produtosId",
ALTER COLUMN "status" SET DEFAULT 'pendente';
