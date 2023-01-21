import { Request, Response } from 'express';
import { EnderecoIn, EnderecoOut } from '../dtos/EnderecoDTO';
import EnderecoModel from '../model/EnderecoModel';

const enderecoModel = new EnderecoModel();

export default class EnderecoController {
  create = async (req: Request, res: Response) => {
    try {
      const endereco: EnderecoIn = req.body;
      // @ts-ignore
      const newEndereco: EnderecoOut = await enderecoModel.create(res, endereco);
      // res.status(201).json(newEndereco);
    } catch (e) {
      console.log('Failed to create endereco', e);
    }
  }

  getAll = async (req: Request, res: Response) => {
    try {
      // receives a list of objects EnderecoOut from EnderecoModel
      // @ts-ignore
      const enderecos: EnderecoOut[] = await enderecoModel.getAll(res);
      // res.status(200).json(enderecos);

    } catch (e) {
      console.log('Failed to get all enderecos', e);
    }
  }
};