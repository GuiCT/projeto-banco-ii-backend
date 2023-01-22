import { Router } from 'express';
import MunicipioController from '../controller/MunicipioController';

const routes = Router();
const municipioController = new MunicipioController();

routes.post('/', municipioController.create);
routes.get('/', municipioController.getAll);
routes.get('/:id_municipio', municipioController.get);


export default routes;