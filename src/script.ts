import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['query']
})

async function main() {
  const ufTeste = await prisma.ufs.create({
    data: {
        nome: 'Teste',
        sigla: 'TT',
    },
    });
    console.log(ufTeste);

    const allPessoas = await prisma.pessoa.findMany();
    console.log(allPessoas);

    const allTesteUfs = await prisma.ufs.findMany({
        where:{
            nome: 'Teste'
        },
        take: 2
    });
    console.log(allTesteUfs);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })