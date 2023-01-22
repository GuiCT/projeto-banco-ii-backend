import { EnderecoIn, EnderecoOut } from '../dtos/EnderecoDTO';
import client from '../database';


export default class EnderecoModel {

  create = async (resOrigin: any, endereco: EnderecoIn) => {
    client.query('INSERT INTO "Endereco" (uuid_endereco, rua, numero, complemento, bairro, cep, uuid_pessoa, "municipiosId_municipio") VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7) RETURNING uuid_endereco', [endereco.rua, endereco.numero, endereco.complemento, endereco.bairro, endereco.cep, endereco.uuid_pessoa, endereco.municipiosId_municipio
    ], (err:any, res:any) => {
          if(err) resOrigin.status(500).json(err.message);
          else resOrigin.status(201).json(res.rows[0].uuid_endereco);
        })
    
  }

  get = async(resOrigin:any, id: string) => {
    client.query('SELECT * FROM \"Endereco\" WHERE uuid_endereco = $1', [id], (err:any, res:any) => {
          if(err) resOrigin.status(500).json(err.message);
          else resOrigin.status(200).json(res.rows); 
        })
  }

  getAll = async (resOrigin: any) => {
    var saida: EnderecoOut[] | null;
    client.query('SELECT rua, numero, complemento,bairro, cep, "municipiosId_municipio" FROM "Endereco"', (err:any, res:any) => {
      // returns a list of objects EnderecoOut
      saida = res.rows;
      resOrigin.status(200).json(saida);

    })
    
  }

};