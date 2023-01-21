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