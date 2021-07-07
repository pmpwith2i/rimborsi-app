export declare const deleghe: {
    id: number;
    fiscalCode: string;
    datoreLavoro: string;
    tipoDelega: string;
    name: string;
    dataInizio: Date;
    dataFine: Date;
    verificata: boolean;
}[];
export declare const richieste: {
    id: number;
    stato: string;
    volontario: string;
    datoreLavoro: string;
    tipoDatore: string;
    evento: string;
    dataInizio: Date;
    dataFine: Date;
    giorni: number;
    importo: number;
}[];
export declare const storico: {
    id: number;
    data: Date;
    motivo: string;
    nota: string;
}[];
export declare const notifiche: {
    id: number;
    notifica: string;
    volontario: string;
    datoreLavoro: string;
    tipoDatore: string;
    evento: string;
    dataInizio: Date;
    dataFine: Date;
    giorni: number;
}[];
