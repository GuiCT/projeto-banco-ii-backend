import { Request, Response } from 'express';
import { UfIn, UfOut } from '../dtos/UfDTO';
import UfModel from '../model/UfModel';

const ufModel = new UfModel();

export default class UfController {
  create = async (req: Request, res: Response) => {
    try {
      const uf: UfIn = req.body;
      // @ts-ignore
      const newUf: UfOut = await ufModel.create(res, uf);
      // res.status(201).json(newUf);
    } catch (e) {
      console.log('Failed to create uf', e);
    }
  }

  getAll = async (req: Request, res: Response) => {
    try {
      // receives a list of objects UfOut from UfModel
      // @ts-ignore
      const ufs: UfOut[] | null = await ufModel.getAll(res);
      // res.status(200).json(ufs);

    } catch (e) {
      console.log('Failed to get all ufs', e);
    }
  }
};