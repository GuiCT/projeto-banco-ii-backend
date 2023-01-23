import { Router } from 'express';
import VeiculoController from '../controller/VeiculoController';

const routes = Router();
const veiculoController = new VeiculoController();

routes.post('/', veiculoController.create);
routes.get('/', veiculoController.getAll);
routes.get('/:uuid_veiculo', veiculoController.get);
routes.put('/', veiculoController.update);
routes.delete('/:uuid_veiculo', veiculoController.delete);


export default routes;