export interface DescarteIn {
    uuid_solicitante: string;
    uuid_destino: string;
    uuid_origem: string;
}

export interface DescarteOut {
    solicitado_em: Date;
    uuid_solicitante: string;
    uuid_destino: string;
    uuid_origem: string;
}