export interface PessoaIn {
    nome: string;
    sobrenome: string;
    email: string;
    cpf: string;
    senha: string;
    is_funcionario: boolean;
    is_admin: boolean;
}

export interface PessoaOut {
    uuid: string;
    nome: string;
    sobrenome: string;
    email: string;
    cpf: string;
    senha: string;
    is_funcionario: boolean;
    is_admin: boolean;
}