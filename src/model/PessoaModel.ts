import { PessoaIn, PessoaOut } from '../dtos/PessoaDTO';
import client from '../database';


export default class PessoaModel {

  create = async (resOrigin: any, pessoa: PessoaIn) => {
    client.query('INSERT INTO "Pessoa" (uuid_pessoa, nome, sobrenome, email, cpf, senha, is_funcionario, is_admin) VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7)', [pessoa.nome, pessoa.sobrenome, pessoa.email, pessoa.cpf, pessoa.senha, pessoa.is_funcionario, pessoa.is_admin
    ], (err:any, res:any) => {
          if(err) resOrigin.status(500).json(err.message);
          else resOrigin.status(201).json("Pessoa criado com sucesso!");
        })
  }

  getAll = async (resOrigin: any) => {
    var saida: PessoaOut[] | null;
    client.query('SELECT uuid_pessoa as uuid, nome, sobrenome, email, cpf, senha, is_funcionario, is_admin FROM "Pessoa"', (err:any, res:any) => {
      // returns a list of objects PessoaOut
      if (err) resOrigin.status(500).json(err.message);
      else
      saida = res.rows;
      resOrigin.status(200).json(saida);
    })
  }
};