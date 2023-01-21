import { Router } from 'express';
import UfController from '../controller/UfController';

const routes = Router();
const ufController = new UfController();

routes.post('/', ufController.create);
routes.get('/', ufController.getAll);


export default routes;