/*
  Warnings:

  - You are about to drop the column `pessoaUuid_pessoa` on the `Descartes` table. All the data in the column will be lost.
  - Made the column `uuid_origem` on table `Descartes` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Descartes" DROP CONSTRAINT "Descartes_pessoaUuid_pessoa_fkey";

-- AlterTable
ALTER TABLE "Descartes" DROP COLUMN "pessoaUuid_pessoa",
ALTER COLUMN "uuid_origem" SET NOT NULL,
ALTER COLUMN "uuid_destino" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Descartes" ADD CONSTRAINT "Descartes_uuid_solicitante_fkey" FOREIGN KEY ("uuid_solicitante") REFERENCES "Pessoa"("uuid_pessoa") ON DELETE RESTRICT ON UPDATE CASCADE;
