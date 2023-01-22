import { MunicipioIn } from '../dtos/MunicipioDTO';
import client from '../database';


export default class MunicipioModel {

  create = async (resOrigin: any, municipio: MunicipioIn) => {
    client.query('INSERT INTO "Municipios" (nome, id_uf) VALUES ($1, $2)', [municipio.nome, municipio.id_uf], (err:any, res:any) => {
          if(err) resOrigin.status(500).json(err);
          resOrigin.status(201).json("Municipio criado com sucesso!");
        })
  }

  get = async(resOrigin:any, id: number) => {
    client.query('SELECT * FROM "Municipios" WHERE id_municipio = $1', [id], (err:any, res:any) => {
          if(err) resOrigin.status(500).json(err);
          resOrigin.status(200).json(res.rows); 
        })
  }

  getByUf = async(resOrigin:any, id_uf: string) => {
    client.query('SELECT * FROM "Municipios" WHERE id_uf = $1', [id_uf], (err:any, res:any) => {
      if(err) resOrigin.status(500).json(err);
      resOrigin.status(200).json(res.rows);
    })
  }
  
  getAll = async (resOrigin: any) => {
    client.query('SELECT * FROM "Municipios"', (err:any, res:any) => {
          if(err) resOrigin.status(500).json(err);
          resOrigin.status(200).json(res.rows);
        })
  }

};