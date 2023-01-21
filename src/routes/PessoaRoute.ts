import { Router } from 'express';
import PessoaController from '../controller/PessoaController';

const routes = Router();
const pessoaController = new PessoaController();

routes.post('/', pessoaController.create);
routes.get('/', pessoaController.getAll);


export default routes;