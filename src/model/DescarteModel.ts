import { DescarteIn, DescarteOut } from '../dtos/DescarteDTO';
import client from '../database';


export default class DescarteModel {

  create = async (resOrigin: any, descarte: DescarteIn) => {
    client.query('INSERT INTO "Descartes" (uuid_descarte, solicitado_em, uuid_solicitante, uuid_destino, uuid_origem) VALUES (gen_random_uuid(), $1, $2, $3, $4)', [new Date(),descarte.uuid_solicitante, descarte.uuid_destino, descarte.uuid_origem], (err:any, res:any) => {
          if(err) resOrigin.status(500).json(err.message);
          else resOrigin.status(201).json("Descarte criado com sucesso!");
        })
    
  }

  getAll = async (resOrigin: any) => {
    var saida: DescarteOut[] | null;
    client.query('SELECT solicitado_em, uuid_solicitante, uuid_destino, uuid_origem FROM "Descartes"', (err:any, res:any) => {
      // returns a list of objects DescarteOut
      if (err) resOrigin.status(500).json(err.message);
      else
      saida = res.rows;
      resOrigin.status(200).json(saida);

    })
    
  }

};