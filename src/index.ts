import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import ufRoute from './routes/UfRoute';
import municipiosRoute from './routes/MunicipioRoute';
import enderecosRoute from './routes/EnderecoRoute';
import categoriasRoute from './routes/CategoriaRoute';
import produtosRoute from './routes/ProdutoRoute';
import veiculosRoute from './routes/VeiculoRoute';
import pessoaRoute from './routes/PessoaRoute';
import descarteRoute from './routes/DescarteRoute';

dotenv.config();
const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());

// app.post('/signup', async(req, res) => {

// app.use("/usuarios", tokenlessUsuariosRoute);
app.use("/ufs", ufRoute);
app.use("/municipios", municipiosRoute);
app.use("/enderecos", enderecosRoute);
app.use("/categorias", categoriasRoute);
app.use("/produtos", produtosRoute);
app.use("/veiculos", veiculosRoute);
app.use("/pessoas", pessoaRoute);
app.use("/descartes", descarteRoute);

app.listen(process.env.PORT || 3344);
