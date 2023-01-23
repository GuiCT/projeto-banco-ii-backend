import { Request, Response } from 'express';
import { PessoaIn, PessoaOut } from '../dtos/PessoaDTO';
import PessoaModel from '../model/PessoaModel';

const pessoaModel = new PessoaModel();

export default class PessoaController {
  create = async (req: Request, res: Response) => {
    try {
      const pessoa: PessoaIn = req.body;
      // @ts-ignore
      const newPessoa: PessoaOut = await pessoaModel.create(res, pessoa);
    } catch (e) {
      console.log('Failed to create pessoa', e);
    }
  }

  getAll = async (req: Request, res: Response) => {
    try {
      // receives a list of objects PessoaOut from PessoaModel
      // @ts-ignore
      const pessoas: PessoaOut[] = await pessoaModel.getAll(res);
    } catch (e) {
      console.log('Failed to get all pessoas', e);
    }
  }

  update = async (req: Request, res: Response) => {
    try {
      const pessoa: PessoaOut = req.body;
      // @ts-ignore
      const updatedPessoa: PessoaOut = await pessoaModel.update(res, pessoa);
    } catch (e) {
      console.log('Failed to update pessoa', e);
    }
  }

  delete = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.uuid_pessoa;
      // @ts-ignore
      const deletedPessoa: PessoaOut = await pessoaModel.delete(res, id);
    } catch (e) {
      console.log('Failed to delete pessoa', e);
    }
  }
};