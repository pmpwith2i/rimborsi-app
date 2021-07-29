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
    stato: number;
    codice: number;
    volontario: string;
    datoreLavoro: string;
    tipoDatore: string;
    evento: string;
    dataInizio: Date;
    dataFine: Date;
    giorni: number;
    importo: number;
}[];
export declare const datiFinanziari: {
    id: number;
    idRichiesta: number;
    numeroGiornate: number;
    stipendioLordoGiorni: number;
    stipendioLordoEuro: number;
    rateo13Ore: number;
    rateo13Euro: number;
    rateo14Ore: number;
    rateo14Euro: number;
    rateoAltreOre: number;
    rateoAltreEuro: number;
    rateoPermessiOre: number;
    rateoPermessiEuro: number;
    rateoFerieOre: number;
    rateoFerieEuro: number;
    rateoFestivitaOre: number;
    rateoFestivitaEuro: number;
    rateoFestivita2Ore: number;
    rateoFestivita2Euro: number;
};
export declare const contributi: {
    id: number;
    idRichiesta: number;
    inpsPerc: number;
    inpsEuro: number;
    inailPerc: number;
    inailEuro: number;
    altriPerc: number;
    altriNome: string;
    altriEuro: number;
    tfrPerc: number;
    tfrEuro: number;
};
export declare const infoPagamento: {
    id: number;
    idRichiesta: number;
    iban: string;
    tipologiaPagamento: string;
};
export declare const richiestaIntegrazioni: {
    id: number;
    idRichiesta: number;
    nota: string;
    allegato: {
        name: string;
        link: string;
        date: Date;
    };
};
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
