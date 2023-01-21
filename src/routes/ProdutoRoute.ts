import { Router } from 'express';
import ProdutoController from '../controller/ProdutoController';

const routes = Router();
const produtoController = new ProdutoController();

routes.post('/', produtoController.create);
routes.get('/', produtoController.getAll);


export default routes;