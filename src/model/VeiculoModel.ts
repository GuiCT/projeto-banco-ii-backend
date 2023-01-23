import { VeiculoIn, VeiculoOut } from '../dtos/VeiculoDTO';
import client from '../database';


export default class VeiculoModel {

  create = async (resOrigin: any, veiculo: VeiculoIn) => {
    client.query('INSERT INTO "Veiculos" (uuid_veiculo, placa, tipo, capacidade) VALUES (gen_random_uuid(), $1, $2, $3) RETURNING uuid_veiculo', [veiculo.placa, veiculo.tipo, veiculo.capacidade], (err:any, res:any) => {
          if(err) resOrigin.status(500).json(err.message);
          else resOrigin.status(201).json(res.rows[0]);
        })
  }

  getAll = async (resOrigin: any) => {
    var saida: VeiculoOut[] | null;
    client.query('SELECT uuid_veiculo as uuid, placa, tipo, capacidade FROM "Veiculos"', (err:any, res:any) => {
      // returns a list of objects VeiculoOut
        if (err) resOrigin.status(500).json(err.message);
        else
      saida = res.rows;
      resOrigin.status(200).json(saida);
    })
  }

  get = async (resOrigin: any, uuid_veiculo: string) => {
    client.query('SELECT * FROM "Veiculos" WHERE uuid_veiculo = $1', [uuid_veiculo], (err:any, res:any) => {
      // returns a list of objects VeiculoOut
      if (err) resOrigin.status(500).json(err.message);
      else
      resOrigin.status(200).json(res.rows[0]);
    })
  }

  update = async (resOrigin: any, veiculo: VeiculoOut) => {
    client.query('UPDATE "Veiculos" SET placa = $1, tipo = $2, capacidade = $3 WHERE uuid_veiculo = $4', [veiculo.placa, veiculo.tipo, veiculo.capacidade, veiculo.uuid_veiculo], (err:any, res:any) => {
      if(err) resOrigin.status(500).json(err.message);
      else resOrigin.status(200).json("Veiculo atualizado com sucesso!");
    })
  }

  delete = async (resOrigin: any, id: string) => {
    client.query('DELETE FROM "Veiculos" WHERE uuid_veiculo = $1', [id], (err:any, res:any) => {
      if(err) resOrigin.status(500).json(err.message);
      else resOrigin.status(200).json("Veiculo deletado com sucesso!");
    })
  }
};