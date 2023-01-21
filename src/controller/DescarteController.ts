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

  getAll = async (req: Request, res: Response) => {
    try {
      // receives a list of objects DescarteOut from DescarteModel
      // @ts-ignore
      const descartes: DescarteOut[] = await descarteModel.getAll(res);
    } catch (e) {
      console.log('Failed to get all descartes', e);
    }
  }
};