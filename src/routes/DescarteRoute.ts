import { Router } from 'express';
import DescarteController from '../controller/DescarteController';

const routes = Router();
const descarteController = new DescarteController();

routes.post('/', descarteController.create);
routes.get('/', descarteController.getAll);


export default routes;