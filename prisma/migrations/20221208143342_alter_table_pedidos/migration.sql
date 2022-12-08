-- DropForeignKey
ALTER TABLE "endereco" DROP CONSTRAINT "endereco_id_cliente_fkey";

-- DropForeignKey
ALTER TABLE "pedidos" DROP CONSTRAINT "pedidos_id_cliente_fkey";

-- DropForeignKey
ALTER TABLE "pedidos" DROP CONSTRAINT "pedidos_id_produto_fkey";

-- AlterTable
ALTER TABLE "endereco" ADD COLUMN     "clientesId" TEXT;

-- AlterTable
ALTER TABLE "pedidos" ADD COLUMN     "clientesId" TEXT,
ADD COLUMN     "produtosId" TEXT;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_clientesId_fkey" FOREIGN KEY ("clientesId") REFERENCES "clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_produtosId_fkey" FOREIGN KEY ("produtosId") REFERENCES "produtos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "endereco" ADD CONSTRAINT "endereco_clientesId_fkey" FOREIGN KEY ("clientesId") REFERENCES "clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
