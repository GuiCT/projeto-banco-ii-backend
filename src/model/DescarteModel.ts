import { DescarteIn, DescarteOut } from '../dtos/DescarteDTO';
import client from '../database';


export default class DescarteModel {

  create = async (resOrigin: any, descarte: DescarteIn) => {
    client.query('INSERT INTO "Descartes" (uuid_descarte, uuid_solicitante, uuid_executante, uuid_destino, uuid_origem) VALUES (gen_random_uuid(), $1, $2, $3, $4) RETURNING uuid_descarte', [descarte.uuid_solicitante, descarte.uuid_executante,descarte.uuid_destino, descarte.uuid_origem], (err:any, res:any) => {
      if (err) resOrigin.status(500).json(err.message);
      else resOrigin.status(200).json(res.rows[0]);
    })
  }

  insert_produtos = async (resOrigin: any, entrada: any) => {
    client.query('INSERT INTO "ProdutosNoDescarte" (uuid_descarte, uuid_produto, quantidade) VALUES ($1, $2, $3) RETURNING uuid_produto, uuid_descarte', [entrada.uuid_descarte, entrada.uuid_produto, entrada.quantidade], (err:any, res:any) => {
      if (err) resOrigin.status(500).json(err.message);
      else resOrigin.status(200).json(res.rows[0]);
    })
  }

  insert_veiculos = async (resOrigin: any, entrada: any) => {
    client.query('INSERT INTO "VeiculosNoDescarte" (uuid_descarte, uuid_veiculo) VALUES ($1, $2) RETURNING uuid_descarte, uuid_veiculo', [entrada.uuid_descarte, entrada.uuid_veiculo], (err:any, res:any) => {
      if (err) resOrigin.status(500).json(err.message);
      else resOrigin.status(200).json(res.rows[0]);
    })
  }

  insert_funcionario = async (resOrigin: any, entrada: any) => {
    client.query('INSERT INTO "Funcionario_executa_Descarte" (uuid_descarte, uuid_funcionario, uuid_veiculo) VALUES ($1, $2, $3) RETURNING uuid_descarte, uuid_funcionario, uuid_veiculo', [entrada.uuid_descarte, entrada.uuid_funcionario, entrada.uuid_veiculo], (err:any, res:any) => {
      if (err) resOrigin.status(500).json(err.message);
      else resOrigin.status(200).json(res.rows[0]);
    })
  }

  getAll = async (resOrigin: any) => {
    var saida: DescarteOut[] | null;
    client.query('SELECT * FROM "Descartes"', (err:any, res:any) => {
      // returns a list of objects DescarteOut
      if (err) resOrigin.status(500).json(err.message);
      else
      saida = res.rows;
      resOrigin.status(200).json(saida);

    })
    
  }

  getAllProdutos = async (resOrigin: any) => {
    client.query('SELECT * FROM "ProdutosNoDescarte"', (err:any, res:any) => {
      if (err) resOrigin.status(500).json(err.message);
      else
      resOrigin.status(200).json(res.rows);
    })
  }

  getAllVeiculos = async (resOrigin: any) => {
    client.query('SELECT * FROM "VeiculosNoDescarte"', (err:any, res:any) => {
      if (err) resOrigin.status(500).json(err.message);
      else
      resOrigin.status(200).json(res.rows);
    })
  }

  getAllFuncionarios = async (resOrigin: any) => {
    client.query('SELECT * FROM "Funcionario_executa_Descarte"', (err:any, res:any) => {
      if (err) resOrigin.status(500).json(err.message);
      else
      resOrigin.status(200).json(res.rows);
    })
  }

  getProdutosByDescarte = async (resOrigin: any, uuid_descarte: string) => {
    client.query('SELECT * FROM "ProdutosNoDescarte" WHERE uuid_descarte = $1', [uuid_descarte], (err:any, res:any) => {
      if (err) resOrigin.status(500).json(err.message);
      else
      resOrigin.status(200).json(res.rows);
    })
  }

  getVeiculosByDescarte = async (resOrigin: any, uuid_descarte: string) => {
    client.query('SELECT * FROM "VeiculosNoDescarte" WHERE uuid_descarte = $1', [uuid_descarte], (err:any, res:any) => {
      if (err) resOrigin.status(500).json(err.message);
      else
      resOrigin.status(200).json(res.rows);
    })
  }

  getFuncionariosByDescarte = async (resOrigin: any, uuid_descarte: string) => {
    client.query('SELECT * FROM "Funcionario_executa_Descarte" WHERE uuid_descarte = $1', [uuid_descarte], (err:any, res:any) => {
      if (err) resOrigin.status(500).json(err.message);
      else
      resOrigin.status(200).json(res.rows);
    })
  }

};