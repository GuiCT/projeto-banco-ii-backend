import { ProdutoIn, ProdutoOut } from '../dtos/ProdutoDTO';
import client from '../database';


export default class ProdutoModel {

  create = async (resOrigin: any, produto: ProdutoIn) => {
    client.query('INSERT INTO "Produtos" (uuid_produto, nome, descricao, massa, id_categoria) VALUES (gen_random_uuid(), $1, $2, $3, $4)', [produto.nome, produto.descricao, produto.massa, produto.id_categoria
    ], (err:any, res:any) => {
          if(err) resOrigin.status(500).json(err.message);
          else resOrigin.status(201).json("Produto criado com sucesso!");
        })
    
  }

  getAll = async (resOrigin: any) => {
    var saida: ProdutoOut[] | null;
    client.query('SELECT nome, descricao, massa,id_categoria FROM "Produtos"', (err:any, res:any) => {
      // returns a list of objects ProdutoOut
      if (err) resOrigin.status(500).json(err.message);
      else
      saida = res.rows;
      resOrigin.status(200).json(saida);

    })
    
  }

};