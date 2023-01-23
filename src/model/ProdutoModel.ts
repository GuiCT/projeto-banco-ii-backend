import { ProdutoIn, ProdutoOut } from '../dtos/ProdutoDTO';
import client from '../database';


export default class ProdutoModel {

  create = async (resOrigin: any, produto: ProdutoIn) => {
    client.query('INSERT INTO "Produtos" (uuid_produto, nome, descricao, massa, id_categoria) VALUES (gen_random_uuid(), $1, $2, $3, $4) RETURNING uuid_produto', [produto.nome, produto.descricao, produto.massa, produto.id_categoria
    ], (err:any, res:any) => {
          if(err) resOrigin.status(500).json(err.message);
          else resOrigin.status(201).json(res.rows[0]);
        })
    
  }

  getAll = async (resOrigin: any) => {
    var saida: ProdutoOut[] | null;
    client.query('SELECT * FROM "Produtos"', (err:any, res:any) => {
      // returns a list of objects ProdutoOut
      if (err) resOrigin.status(500).json(err.message);
      else
      saida = res.rows;
      resOrigin.status(200).json(saida);

    })
    
  }

  get = async (resOrigin: any, uuid_produto: string) => {
    client.query('SELECT * FROM "Produtos" WHERE uuid_produto = $1', [uuid_produto], (err:any, res:any) => {
      // returns a list of objects ProdutoOut
      if (err) resOrigin.status(500).json(err.message);
      else
      resOrigin.status(200).json(res.rows[0]);

    })
    
  }

};