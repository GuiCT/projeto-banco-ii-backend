import { Request, Response } from 'express';
import { ProdutoIn, ProdutoOut } from '../dtos/ProdutoDTO';
import ProdutoModel from '../model/ProdutoModel';

const produtoModel = new ProdutoModel();

export default class ProdutoController {
  create = async (req: Request, res: Response) => {
    try {
      const produto: ProdutoIn = req.body;
      // @ts-ignore
      const newProduto: ProdutoOut = await produtoModel.create(res, produto);
    } catch (e) {
      console.log('Failed to create produto', e);
    }
  }

  getAll = async (req: Request, res: Response) => {
    try {
      // receives a list of objects ProdutoOut from ProdutoModel
      // @ts-ignore
      const produtos: ProdutoOut[] = await produtoModel.getAll(res);
    } catch (e) {
      console.log('Failed to get all produtos', e);
    }
  }
};