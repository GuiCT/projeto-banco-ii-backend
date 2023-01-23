import { Request, Response } from 'express';
import { DescarteIn, DescarteOut } from '../dtos/DescarteDTO';
import DescarteModel from '../model/DescarteModel';

const descarteModel = new DescarteModel();

export default class DescarteController {
  create = async (req: Request, res: Response) => {
    try {
      const descarte: DescarteIn = req.body;
      // @ts-ignore
      const newDescarte: DescarteOut = await descarteModel.create(res, descarte);
    } catch (e) {
      console.log('Failed to create descarte', e);
    }
  }

  insert_produtos = async (req: Request, res: Response) => {
    try {
      const entrada: any = req.body;
      // @ts-ignore
      const saida: any = await descarteModel.insert_produtos(res, entrada);
    } catch (e) {
      console.log('Failed to insert produtos', e);
    }
  }

  insert_veiculos = async (req: Request, res: Response) => {
    try {
      const entrada: any = req.body;
      // @ts-ignore
      const saida: any = await descarteModel.insert_veiculos(res, entrada);
    } catch (e) {
      console.log('Failed to insert veiculos', e);
    }
  }

  insert_funcionario = async (req: Request, res: Response) => {
    try {
      const entrada: any = req.body;
      // @ts-ignore
      const saida: any = await descarteModel.insert_funcionario(res, entrada);
    } catch (e) {
      console.log('Failed to insert funcionario', e);
    }
  }


  getAll = async (req: Request, res: Response) => {
    try {
      // receives a list of objects DescarteOut from DescarteModel
      // @ts-ignore
      const descartes: DescarteOut[] = await descarteModel.getAll(res);
    } catch (e) {
      console.log('Failed to get all descartes', e);
    }
  }

  get_produtos = async (req: Request, res: Response) => {
    try {
      const entrada: any = req.body;
      // @ts-ignore
      const saida: any = await descarteModel.getAllProdutos(res, entrada);
    } catch (e) {
      console.log('Failed to get produtos', e);
    }
  }

  get_veiculos = async (req: Request, res: Response) => {
    try {
      const entrada: any = req.body;
      // @ts-ignore
      const saida: any = await descarteModel.getAllVeiculos(res, entrada);
    } catch (e) {
      console.log('Failed to get veiculos', e);
    }
  }

  get_funcionario = async (req: Request, res: Response) => {
    try {
      const entrada: any = req.body;
      // @ts-ignore
      const saida: any = await descarteModel.getAllFuncionarios(res, entrada);
    } catch (e) {
      console.log('Failed to get funcionario', e);
    }
  }

  get_produtos_by_descarte = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.uuid_descarte;
      // @ts-ignore
      const saida: any = await descarteModel.getProdutosByDescarte(res, id);
    } catch (e) {
      console.log('Failed to get produtos by descarte', e);
    }
  }

  get_veiculos_by_descarte = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.uuid_descarte;
      // @ts-ignore
      const saida: any = await descarteModel.getVeiculosByDescarte(res, id);
    } catch (e) {
      console.log('Failed to get veiculos by descarte', e);
    }
  }

  get_funcionario_by_descarte = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.uuid_descarte;
      // @ts-ignore
      const saida: any = await descarteModel.getFuncionariosByDescarte(res, id);
    } catch (e) {
      console.log('Failed to get funcionario by descarte', e);
    }
  }

  put_endereco_destino = async (req: Request, res: Response) => {
    try {
      const uuid_descarte = req.body.uuid_descarte;
      const uuid_destino = req.body.uuid_destino;
      // @ts-ignore
      const saida: any = await descarteModel.putEnderecoDestino(res, uuid_descarte, uuid_destino);
    } catch (e) {
      console.log('Failed to put endereco destino', e);
    }
  }
};