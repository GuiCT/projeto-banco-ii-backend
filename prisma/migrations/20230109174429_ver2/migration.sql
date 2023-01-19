/*
  Warnings:

  - You are about to drop the `Funcionario_executa_Descarte` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pessoa_reside_Endereco` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Funcionario_executa_Descarte" DROP CONSTRAINT "Funcionario_executa_Descarte_uuid_descarte_fkey";

-- DropForeignKey
ALTER TABLE "Funcionario_executa_Descarte" DROP CONSTRAINT "Funcionario_executa_Descarte_uuid_funcionario_fkey";

-- DropForeignKey
ALTER TABLE "Funcionario_executa_Descarte" DROP CONSTRAINT "Funcionario_executa_Descarte_uuid_veiculo_fkey";

-- DropForeignKey
ALTER TABLE "Pessoa_reside_Endereco" DROP CONSTRAINT "Pessoa_reside_Endereco_uuid_endereco_fkey";

-- DropForeignKey
ALTER TABLE "Pessoa_reside_Endereco" DROP CONSTRAINT "Pessoa_reside_Endereco_uuid_pessoa_fkey";

-- AlterTable
ALTER TABLE "Endereco" ALTER COLUMN "complemento" DROP NOT NULL;

-- DropTable
DROP TABLE "Funcionario_executa_Descarte";

-- DropTable
DROP TABLE "Pessoa_reside_Endereco";
