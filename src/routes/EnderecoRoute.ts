import { Router } from 'express';
import EnderecoController from '../controller/EnderecoController';

const routes = Router();
const enderecoController = new EnderecoController();

routes.post('/', enderecoController.create);
routes.get('/', enderecoController.getAll);
routes.get('/:uuid_endereco', enderecoController.get);

export default routes;