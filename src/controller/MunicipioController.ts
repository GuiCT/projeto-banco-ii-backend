import { Request, Response } from 'express';
import { MunicipioIn, MunicipioOut } from '../dtos/MunicipioDTO';
import MunicipioModel from '../model/MunicipioModel';

const municipioModel = new MunicipioModel();

export default class MunicipioController {
  create = async (req: Request, res: Response) => {
    try {
      const municipio: MunicipioIn = req.body;
      // @ts-ignore
      const newMunicipio: MunicipioOut = await municipioModel.create(res, municipio);
      // res.status(201).json(newMunicipio);
    } catch (e) {
      console.log('Failed to create municipio', e);
    }
  }

  get = async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id_municipio);
      // @ts-ignore
      const newMunicipio: MunicipioOut | null = await municipioModel.get(res, id);

    } catch (e) {
      console.log('Failed to get Municipio', e);
    }
  }
  
  getByUf = async (req: Request, res: Response) => {
    try {
      const id_uf: string = req.body.id_uf;
      // @ts-ignore
      const newMunicipio: MunicipioOut | null = await municipioModel.getByUf(res, id_uf);
    } catch (e) {
      console.log('Failed to get Municipio', e);
    }
  }

  getAll = async (req: Request, res: Response) => {
    try {
      // receives a list of objects MunicipioOut from MunicipioModel  
      // @ts-ignore
      const municipios: MunicipioOut[] | null = await municipioModel.getAll(res);
      // res.status(200).json(municipios);

    } catch (e) {
      console.log('Failed to get all municipios', e);
    }
  }
};