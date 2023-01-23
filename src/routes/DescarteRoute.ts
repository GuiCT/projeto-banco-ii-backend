import { Router } from 'express';
import DescarteController from '../controller/DescarteController';

const routes = Router();
const descarteController = new DescarteController();

routes.post('/', descarteController.create);
routes.get('/', descarteController.getAll);
routes.post('/produtos', descarteController.insert_produtos);
routes.post('/veiculos', descarteController.insert_veiculos);
routes.post('/funcionario', descarteController.insert_funcionario);
routes.get('/produtos', descarteController.get_produtos);
routes.get('/veiculos', descarteController.get_veiculos);
routes.get('/funcionario', descarteController.get_funcionario);
routes.get('/produtos/:uuid_descarte', descarteController.get_produtos_by_descarte);
routes.get('/veiculos/:uuid_descarte', descarteController.get_veiculos_by_descarte);
routes.get('/funcionario/:uuid_descarte', descarteController.get_funcionario_by_descarte);




export default routes;