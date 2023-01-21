import { Router } from 'express';
import CategoriaController from '../controller/CategoriaController';

const routes = Router();
const categoriaController = new CategoriaController();

routes.post('/', categoriaController.create);
routes.get('/', categoriaController.getAll);

export default routes;