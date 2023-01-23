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

  get = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.uuid_veiculo;
      // @ts-ignore
      const veiculo: VeiculoOut = await veiculoModel.get(res, id);
    } catch (e) {
      console.log('Failed to get veiculo', e);
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

  update = async (req: Request, res: Response) => {
    try {
      const veiculo: VeiculoOut = req.body;
      // @ts-ignore
      const updatedVeiculo: VeiculoOut = await veiculoModel.update(res, veiculo);
    } catch (e) {
      console.log('Failed to update veiculo', e);
    }
  }

  delete = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.uuid_veiculo;
      // @ts-ignore
      const deletedVeiculo: VeiculoOut = await veiculoModel.delete(res, id);
    } catch (e) {
      console.log('Failed to delete veiculo', e);
    }
  }
};