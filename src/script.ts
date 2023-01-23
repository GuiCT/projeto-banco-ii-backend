// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient({
//     log: ['query']
// })
// const {Client} = require('pg');
// const client = new Client({
//   user: 'postgresadmin',
//   host: 'localhost',
//   database: 'postgres',
//   password: 'postgresadmin',
//   port: 5432,
// });


function main() {
  // const saidaQuery = await prisma.$queryRaw`SELECT * FROM "Ufs"`;
  // if (saidaQuery) console.log(saidaQuery);


  // client.query('INSERT INTO "Ufs" (nome, sigla) VALUES ($1, $2)', ['Teste5', 'AH'], (err:any, res:any) => {
  //   if(err) console.log(err);
  //   console.log(res);
  //   // client.end();
  // });
  client.connect();

  client.query('SELECT * FROM "Ufs"', (err:any, res:any) => {
    if (err) console.log(err);
    console.log(res.rows);
    client.end();
  });
  // const ufTeste = await prisma.ufs.create({
  //   data: {
  //       nome: 'Teste2',
  //       sigla: 'DD',
  //   },
  //   });
  //   console.log(ufTeste);

  //   const allPessoas = await prisma.pessoa.findMany();
  //   console.log(allPessoas);

  //   const allTesteUfs = await prisma.ufs.findMany({
  //       where:{
  //           nome: 'Teste'
  //       },
  //       take: 2
  //   });
  //   console.log(allTesteUfs);
}

main()
  // .then(async () => {
  //   console.log('Done');
  //   await client.end();
  // })
  // .catch(async (e) => {
  //   console.log('Catch');
  //   console.error(e)
  //   await client.end();
  //   process.exit(1)
  // })