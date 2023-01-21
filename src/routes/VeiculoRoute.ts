import { Router } from 'express';
import VeiculoController from '../controller/VeiculoController';

const routes = Router();
const veiculoController = new VeiculoController();

routes.post('/', veiculoController.create);
routes.get('/', veiculoController.getAll);


export default routes;