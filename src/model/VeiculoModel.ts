import { VeiculoIn, VeiculoOut } from '../dtos/VeiculoDTO';
import client from '../database';


export default class VeiculoModel {

  create = async (resOrigin: any, veiculo: VeiculoIn) => {
    client.query('INSERT INTO "Veiculos" (uuid_veiculo, placa, tipo, capacidade) VALUES (gen_random_uuid(), $1, $2, $3)', [veiculo.placa, veiculo.tipo, veiculo.capacidade], (err:any, res:any) => {
          if(err) resOrigin.status(500).json(err.message);
          else resOrigin.status(201).json("Veiculo criado com sucesso!");
        })
  }

  getAll = async (resOrigin: any) => {
    var saida: VeiculoOut[] | null;
    client.query('SELECT placa, tipo, capacidade FROM "Veiculos"', (err:any, res:any) => {
      // returns a list of objects VeiculoOut
        if (err) resOrigin.status(500).json(err.message);
        else
      saida = res.rows;
      resOrigin.status(200).json(saida);
    })
  }
};