import { Router } from 'express';
import PessoaController from '../controller/PessoaController';

const routes = Router();
const pessoaController = new PessoaController();

routes.post('/', pessoaController.create);
routes.get('/', pessoaController.getAll);
routes.put('/', pessoaController.update);
routes.delete('/:uuid_pessoa', pessoaController.delete);


export default routes;