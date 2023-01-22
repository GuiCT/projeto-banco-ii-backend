export interface EnderecoIn {
    rua: string;
    numero: number;
    complemento: string;
    bairro: string;
    cep: string;
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
    municipiosId_municipio: number;
}