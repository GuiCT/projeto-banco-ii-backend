import { CategoriaIn, CategoriaOut } from '../dtos/CategoriaDTO';
import client from '../database';

export default class CategoriaModel {
  create = async (resOrigin: any, categoria: CategoriaIn) => {
    client.query('INSERT INTO "Categorias" (nome, prioridade) VALUES ($1, $2) RETURNING id_categoria', [categoria.nome, categoria.prioridade], (err:any, res:any) => {
          if(err) resOrigin.status(500).json(err.stack);
          else resOrigin.status(201).json(res.rows[0]);
        })
  }

  getAll = async (resOrigin: any) => {
    var saida: CategoriaOut[] | null;
    client.query('SELECT id_categoria, nome, prioridade FROM "Categorias"', (err:any, res:any) => {
      // returns a list of objects CategoriaOut
      saida = res.rows;
      resOrigin.status(200).json(saida);
    }) 
  }
};
