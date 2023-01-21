import { Request, Response } from 'express';
import { VeiculoIn, VeiculoOut } from '../dtos/VeiculoDTO';
import VeiculoModel from '../model/VeiculoModel';

const veiculoModel = new VeiculoModel();

export default class VeiculoController {
  create = async (req: Request, res: Response) => {
    try {
      const veiculo: VeiculoIn = req.body;
      // @ts-ignore
      const newVeiculo: VeiculoOut = await veiculoModel.create(res, veiculo);
    } catch (e) {
      console.log('Failed to create veiculo', e);
    }
  }

  getAll = async (req: Request, res: Response) => {
    try {
      // receives a list of objects VeiculoOut from VeiculoModel
      // @ts-ignore
      const veiculos: VeiculoOut[] = await veiculoModel.getAll(res);
    } catch (e) {
      console.log('Failed to get all veiculos', e);
    }
  }
};