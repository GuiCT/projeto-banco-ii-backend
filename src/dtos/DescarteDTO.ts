import { ProdutoIn, ProdutoOut } from './ProdutoDTO';
import { VeiculoIn, VeiculoOut } from './VeiculoDTO';
import { PessoaIn, PessoaOut } from './PessoaDTO';

export interface DescarteIn {
    uuid_solicitante: string;
    uuid_executante: string;
    uuid_destino: string;
    uuid_origem: string;

}

export interface DescarteOut {
    solicitado_em: Date;
    uuid_solicitante: string;
    uuid_destino: string;
    uuid_origem: string;
    produtos: string[];
    veiculos: string[];
    Funcionario_executa_descarte: string[];
}