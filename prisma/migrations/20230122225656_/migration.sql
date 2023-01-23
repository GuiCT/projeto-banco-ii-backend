/*
  Warnings:

  - Added the required column `uuid_executante` to the `Descartes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Descartes" ADD COLUMN     "pessoaUuid_pessoa" TEXT,
ADD COLUMN     "uuid_executante" TEXT NOT NULL,
ALTER COLUMN "solicitado_em" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "uuid_origem" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ProdutosNoDescarte" (
    "uuid_produto" TEXT NOT NULL,
    "uuid_descarte" TEXT NOT NULL,
    "quantidade" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ProdutosNoDescarte_pkey" PRIMARY KEY ("uuid_produto","uuid_descarte")
);

-- CreateTable
CREATE TABLE "VeiculosNoDescarte" (
    "uuid_veiculo" TEXT NOT NULL,
    "uuid_descarte" TEXT NOT NULL,
    "data_descarte" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VeiculosNoDescarte_pkey" PRIMARY KEY ("uuid_veiculo","uuid_descarte")
);

-- CreateTable
CREATE TABLE "Funcionario_executa_Descarte" (
    "uuid_funcionario" TEXT NOT NULL,
    "uuid_descarte" TEXT NOT NULL,
    "uuid_veiculo" TEXT NOT NULL,
    "data_execucao" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Funcionario_executa_Descarte_pkey" PRIMARY KEY ("uuid_funcionario","uuid_descarte","uuid_veiculo")
);

-- AddForeignKey
ALTER TABLE "Descartes" ADD CONSTRAINT "Descartes_pessoaUuid_pessoa_fkey" FOREIGN KEY ("pessoaUuid_pessoa") REFERENCES "Pessoa"("uuid_pessoa") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProdutosNoDescarte" ADD CONSTRAINT "ProdutosNoDescarte_uuid_produto_fkey" FOREIGN KEY ("uuid_produto") REFERENCES "Produtos"("uuid_produto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProdutosNoDescarte" ADD CONSTRAINT "ProdutosNoDescarte_uuid_descarte_fkey" FOREIGN KEY ("uuid_descarte") REFERENCES "Descartes"("uuid_descarte") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VeiculosNoDescarte" ADD CONSTRAINT "VeiculosNoDescarte_uuid_veiculo_fkey" FOREIGN KEY ("uuid_veiculo") REFERENCES "Veiculos"("uuid_veiculo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VeiculosNoDescarte" ADD CONSTRAINT "VeiculosNoDescarte_uuid_descarte_fkey" FOREIGN KEY ("uuid_descarte") REFERENCES "Descartes"("uuid_descarte") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Funcionario_executa_Descarte" ADD CONSTRAINT "Funcionario_executa_Descarte_uuid_funcionario_fkey" FOREIGN KEY ("uuid_funcionario") REFERENCES "Pessoa"("uuid_pessoa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Funcionario_executa_Descarte" ADD CONSTRAINT "Funcionario_executa_Descarte_uuid_descarte_fkey" FOREIGN KEY ("uuid_descarte") REFERENCES "Descartes"("uuid_descarte") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Funcionario_executa_Descarte" ADD CONSTRAINT "Funcionario_executa_Descarte_uuid_veiculo_fkey" FOREIGN KEY ("uuid_veiculo") REFERENCES "Veiculos"("uuid_veiculo") ON DELETE RESTRICT ON UPDATE CASCADE;
