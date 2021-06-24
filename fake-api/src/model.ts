export const deleghe = [
    {
        id:1,
        fiscalCode: 'PMPFRC97R06L103Y',
        tipoDatore: 'FUNZIONARIO',
        tipoDelega: 'TIPO 1',
        name: 'Federico Pomponii',
        dataInizio: new Date(),
        dataFine: new Date("2021-10-10")
    },
    {
        id:2,
        fiscalCode: 'PMPFRC97R06L103Y',
        tipoDatore: 'OPERATORE',
        tipoDelega: 'TIPO 1',
        name: 'Federico Pomponii',
        dataInizio: new Date(),
        dataFine: new Date("2021-10-10")
    },
    {
        id:3,
        fiscalCode: 'PMPFRC97R06L103Y',
        tipoDatore: 'AMMINISTRATORE',
        tipoDelega: 'TIPO 1',
        name: 'Federico Pomponii',
        dataInizio: new Date(),
        dataFine: new Date("2021-10-10")
    }
]

export const richieste = [
    {
        id:1,
        stato: 'Presentata',
        volontario: 'Sergio Viola',
        datoreLavoro: 'Mario Rossi SRL',
        tipoDatore: 'Azienda Privatqa',
        evento: 'COVID',
        dataInizio: new Date(),
        dataFine: new Date('2021-10-10'),
        giorni: 5,
        importo: 434.73,
    }
]

export const storico = [
    {id:1,
    data:new Date(),
    motivo: 'Richiesta integrazioni',
    nota: 'Allegare documento'},
    {id:2,
    data:new Date(),
    motivo: 'Richiesta integrazioni',
    nota: ''},
    {id:3,
    data:new Date(),
    motivo: 'Creata',
    nota: ''},
    {id:4,
    data:new Date(),
    motivo: 'Presentata',
    nota: ''}
]

export const notifiche = [
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
]