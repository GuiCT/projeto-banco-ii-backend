import { MunicipioIn } from '../dtos/MunicipioDTO';
import client from '../database';


export default class MunicipioModel {

  create = async (resOrigin: any, municipio: MunicipioIn) => {
    client.query('INSERT INTO "Municipios" (nome, id_uf) VALUES ($1, $2)', [municipio.nome, municipio.id_uf], (err:any, res:any) => {
          if(err) resOrigin.status(500).json(err);
          resOrigin.status(201).json("Municipio criado com sucesso!");
        })
  }

  getAll = async (resOrigin: any) => {
    client.query('SELECT * FROM "Municipios"', (err:any, res:any) => {
          if(err) resOrigin.status(500).json(err);
          resOrigin.status(200).json(res.rows);
        })
  }

};