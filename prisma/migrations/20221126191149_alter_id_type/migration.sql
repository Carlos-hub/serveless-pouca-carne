/*
  Warnings:

  - The primary key for the `clientes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `endereco` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `entregador` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `pedidos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `produtos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `restaurante` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "endereco" DROP CONSTRAINT "endereco_id_cliente_fkey";

-- DropForeignKey
ALTER TABLE "pedidos" DROP CONSTRAINT "pedidos_id_cliente_fkey";

-- DropForeignKey
ALTER TABLE "pedidos" DROP CONSTRAINT "pedidos_id_produto_fkey";

-- AlterTable
ALTER TABLE "clientes" DROP CONSTRAINT "clientes_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "clientes_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "clientes_id_seq";

-- AlterTable
ALTER TABLE "endereco" DROP CONSTRAINT "endereco_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "id_cliente" SET DATA TYPE TEXT,
ADD CONSTRAINT "endereco_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "endereco_id_seq";

-- AlterTable
ALTER TABLE "entregador" DROP CONSTRAINT "entregador_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "entregador_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "entregador_id_seq";

-- AlterTable
ALTER TABLE "pedidos" DROP CONSTRAINT "pedidos_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "id_cliente" SET DATA TYPE TEXT,
ALTER COLUMN "id_produto" SET DATA TYPE TEXT,
ADD CONSTRAINT "pedidos_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "pedidos_id_seq";

-- AlterTable
ALTER TABLE "produtos" DROP CONSTRAINT "produtos_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "produtos_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "produtos_id_seq";

-- AlterTable
ALTER TABLE "restaurante" DROP CONSTRAINT "restaurante_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "restaurante_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "restaurante_id_seq";

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "endereco" ADD CONSTRAINT "endereco_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
