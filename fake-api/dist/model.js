"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notifiche = exports.storico = exports.richiestaIntegrazioni = exports.infoPagamento = exports.contributi = exports.datiFinanziari = exports.schede = exports.richieste = exports.deleghe = void 0;
exports.deleghe = [
    {
        id: 1,
        fiscalCode: 'PMPFRC97R06L103Y',
        datoreLavoro: 'Mario Rossi SRL',
        tipoDelega: 'TIPO 1',
        name: 'Federico Pomponii',
        dataInizio: new Date(),
        dataFine: new Date("2021-10-10"),
        verificata: true
    },
    {
        id: 2,
        fiscalCode: 'PMPFRC97R06L103Y',
        datoreLavoro: 'Mario Rossi SRL',
        tipoDelega: 'TIPO 1',
        name: 'Servio Viola',
        dataInizio: new Date(),
        dataFine: new Date("2021-10-10"),
        verificata: false
    },
    {
        id: 3,
        fiscalCode: 'PMPFRC97R06L103Y',
        datoreLavoro: 'Mario Rossi SRL',
        tipoDelega: 'TIPO 1',
        name: 'Mario Rossi',
        dataInizio: new Date(),
        dataFine: new Date("2021-10-10"),
        verificata: false
    }
];
exports.richieste = [
    {
        id: 1,
        stato: 0,
        codice: 3893939,
        volontario: 'Sergio Viola',
        datoreLavoro: 'Mario Rossi SRL',
        tipoDatore: 'Azienda Privata',
        evento: 'COVID',
        dataInizio: new Date('2021-7-1'),
        dataFine: new Date('2021-10-10'),
        giorni: 5,
        importo: 434.73,
    },
    {
        id: 2,
        stato: 2,
        codice: 4590303,
        volontario: 'Giorgio Bruni',
        datoreLavoro: 'Mario Rossi SRL',
        tipoDatore: 'Azienda Privata',
        evento: 'COVID',
        dataInizio: new Date('2021-6-3'),
        dataFine: new Date('2021-8-10'),
        giorni: 8,
        importo: 689.73,
    }
];
exports.schede = [{
        id: 1,
        text: 'Scheda 1',
    }, {
        id: 2,
        text: 'Scheda 2'
    }];
exports.datiFinanziari = [{
        id: 1,
        idScheda: 1,
        numeroGiornate: 5,
        stipendioLordoGiorni: 1,
        stipendioLordoEuro: 88.78,
        rateo13Ore: 0.67,
        rateo13Euro: 7.4,
        rateo14Ore: 0.67,
        rateo14Euro: 7.4,
        rateoAltreOre: 0,
        rateoAltreEuro: 0,
        rateoPermessiOre: 0,
        rateoPermessiEuro: 0,
        rateoFerieOre: 0.55,
        rateoFerieEuro: 6.1,
        rateoFestivitaOre: 0.1,
        rateoFestivitaEuro: 1.11,
        rateoFestivita2Ore: 0,
        rateoFestivita2Euro: 0
    }, {
        id: 2,
        idScheda: 2,
        numeroGiornate: 8,
        stipendioLordoGiorni: 1,
        stipendioLordoEuro: 88.78,
        rateo13Ore: 0.67,
        rateo13Euro: 7.4,
        rateo14Ore: 0.67,
        rateo14Euro: 7.4,
        rateoAltreOre: 0,
        rateoAltreEuro: 0,
        rateoPermessiOre: 0,
        rateoPermessiEuro: 0,
        rateoFerieOre: 0.55,
        rateoFerieEuro: 6.1,
        rateoFestivitaOre: 0.1,
        rateoFestivitaEuro: 1.11,
        rateoFestivita2Ore: 0,
        rateoFestivita2Euro: 0
    }];
exports.contributi = [{
        id: 1,
        idScheda: 1,
        inpsPerc: 30.68,
        inpsEuro: 34.3,
        inailPerc: 6.33,
        inailEuro: 7.1,
        altriPerc: 0,
        altriNome: 'Nuovo contributo',
        altriEuro: 0,
        tfrPerc: 0,
        tfrEuro: 0
    }, {
        id: 2,
        idScheda: 2,
        inpsPerc: 31.68,
        inpsEuro: 34.3,
        inailPerc: 6.33,
        inailEuro: 7.1,
        altriPerc: 0,
        altriNome: 'Nuovo contributo',
        altriEuro: 0,
        tfrPerc: 0,
        tfrEuro: 0
    }];
exports.infoPagamento = {
    id: 1,
    idRichiesta: 1,
    iban: 'IT 99 C 12345 67890 123456789012',
    tipologiaPagamento: 'ACCR'
};
exports.richiestaIntegrazioni = {
    id: 1,
    idRichiesta: 1,
    nota: 'Una richiesta di integrazioni creata dall\'istruttore',
    allegato: { name: 'Allegato_richiesta.pdf', link: 'no-link', date: new Date() }
};
exports.storico = [
    {
        id: 1,
        data: new Date(),
        motivo: 'Richiesta integrazioni',
        nota: 'Allegare documento'
    },
    {
        id: 2,
        data: new Date(),
        motivo: 'Richiesta integrazioni',
        nota: ''
    },
    {
        id: 3,
        data: new Date(),
        motivo: 'Creata',
        nota: ''
    },
    {
        id: 4,
        data: new Date(),
        motivo: 'Presentata',
        nota: ''
    }
];
exports.notifiche = [
    {
        id: 1,
        notifica: 'Approvata',
        volontario: 'Sergio Viola',
        datoreLavoro: 'Mario Rossi SRL',
        tipoDatore: 'Azienda Privata',
        evento: 'COVID',
        dataInizio: new Date(),
        dataFine: new Date(),
        giorni: 5
    },
    {
        id: 2,
        notifica: 'Richiesta Integrazioni',
        volontario: 'Giuseppe Poggi',
        datoreLavoro: 'Mario Rossi SRL',
        tipoDatore: 'Azienda Privata',
        evento: 'COVID',
        dataInizio: new Date(),
        dataFine: new Date(),
        giorni: 5
    },
    {
        id: 3,
        notifica: 'Approvata',
        volontario: 'Sergio Viola',
        datoreLavoro: 'Mario Rossi SRL',
        tipoDatore: 'Azienda Privata',
        evento: 'COVID',
        dataInizio: new Date(),
        dataFine: new Date(),
        giorni: 5
    }
];
//# sourceMappingURL=model.js.map