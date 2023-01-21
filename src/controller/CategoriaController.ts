import { Request, Response } from 'express';
import { CategoriaIn, CategoriaOut } from '../dtos/CategoriaDTO';
import CategoriaModel from '../model/CategoriaModel';

const categoriaModel = new CategoriaModel();

export default class CategoriaController {
  create = async (req: Request, res: Response) => {
    try {
      const categoria: CategoriaIn = req.body;
      // @ts-ignore
      const newCategoria: CategoriaOut = await categoriaModel.create(res, categoria);
    } catch (e) {
      console.log('Failed to create categoria', e);
    }
  }

  getAll = async (req: Request, res: Response) => {
    try {
      // @ts-ignore
      const categorias: CategoriaOut[] = await categoriaModel.getAll(res);

    } catch (e) {
      console.log('Failed to get all categorias', e);
    }
  }
};