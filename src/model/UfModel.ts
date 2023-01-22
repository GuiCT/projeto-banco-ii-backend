import { UfIn } from '../dtos/UfDTO';
import client from '../database';

export default class UfModel {

  create = async (resOrigin: any, uf: UfIn) => {
    client.query('INSERT INTO "Ufs" (nome, sigla) VALUES ($1, $2)', [uf.nome, uf.sigla], (err:any, res:any) => {
        if(err) resOrigin.status(500).json(err);
        resOrigin.status(201).json("UF criada com sucesso!");
      })
  }

  get = async(resOrigin:any, id: number) => {
    client.query('SELECT * FROM "Ufs" WHERE id_uf = $1', [id], (err:any, res:any) => {
          if(err) resOrigin.status(500).json(err);
          resOrigin.status(200).json(res.rows); 
        })
  }

  getAll = async (resOrigin: any) => {
    client.query('SELECT * FROM "Ufs"', (err:any, res:any) => {
          if(err) resOrigin.status(500).json(err);
          resOrigin.status(200).json(res.rows);
        })
  }
};