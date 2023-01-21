export interface EnderecoIn {
    rua: string;
    numero: number;
    complemento: string;
    bairro: string;
    cep: string;
    cidade: string;
    estado: string;
    uuid_pessoa: string;
    municipiosId_municipio: number;
}

export interface EnderecoOut {
    id_endereco: number;
    rua: string;
    numero: number;
    complemento: string;
    bairro: string;
    cep: string;
    cidade: string;
    estado: string;
}