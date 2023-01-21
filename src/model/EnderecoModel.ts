import { EnderecoIn, EnderecoOut } from '../dtos/EnderecoDTO';
import client from '../database';


export default class EnderecoModel {

  create = async (resOrigin: any, endereco: EnderecoIn) => {
    client.query('INSERT INTO "Endereco" (uuid_endereco, rua, numero, complemento, bairro, cep, uuid_pessoa) VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6)', [endereco.rua, endereco.numero, endereco.complemento, endereco.bairro, endereco.cep, endereco.uuid_pessoa
    ], (err:any, res:any) => {
          if(err) resOrigin(500).json(err);
          resOrigin.status(201).json("Endereço criado com sucesso!");
        })
    
  }

  getAll = async (resOrigin: any) => {
    var saida: EnderecoOut[] | null;
    client.query('SELECT rua, numero, complemento,bairro, cep FROM "Endereco"', (err:any, res:any) => {
      // returns a list of objects EnderecoOut
      saida = res.rows;
      resOrigin.status(200).json(saida);

    })
    
  }

};