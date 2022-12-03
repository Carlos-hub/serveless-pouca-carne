/*
  Warnings:

  - You are about to drop the column `dataNascimento` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `valorDesconto` on the `produtos` table. All the data in the column will be lost.
  - Added the required column `datanascimento` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valordesconto` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "clientes" DROP COLUMN "dataNascimento",
ADD COLUMN     "datanascimento" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "valorDesconto",
ADD COLUMN     "valordesconto" DOUBLE PRECISION NOT NULL;
