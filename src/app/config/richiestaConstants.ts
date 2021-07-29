import {CstFilter} from '../shared/elements/cst-table/classes/cst-filter';
import {CstCol} from '../shared/elements/cst-table/classes/cst-col';

export enum Stato {
  INVIATA,
  PRESENTATA,
  SOSPESA,
  IN_LAVORAZIONE,
  RESPINTA,
  IN_ATTESA_DI_PARERE,
  IN_LIQUIDAZIONE,
  CONCLUSA
}

export function getIsDisabledFormByStato(aState: number): boolean{
  if (aState == Stato.RESPINTA) {
    return true;
  }

  if (aState == Stato.PRESENTATA) {
    return true;
  }

  if (aState == Stato.INVIATA) {
    return true;
  }

  if (aState == Stato.CONCLUSA) {
    return true;
  }
  return false;
}

export function getStatoByNumber(value: number): string {
  if (value === Stato.CONCLUSA) {
    return 'Conclusa';
  }
  if (value === Stato.IN_ATTESA_DI_PARERE) {
    return 'In attesa di parere';
  }
  if (value === Stato.IN_LAVORAZIONE) {
    return 'In lavorazione';
  }
  if (value === Stato.IN_LIQUIDAZIONE) {
    return 'In liquidazione';
  }
  if (value === Stato.INVIATA) {
    return 'Inviata';
  }
  if (value === Stato.PRESENTATA) {
    return 'Presentata';
  }
  if (value === Stato.RESPINTA) {
    return 'Respinta';
  }
  if (value === Stato.SOSPESA) {
    return 'Sospesa';
  }

  return '';
}

export function getRichiesteFilters(): any {
  const richiesteFilters: CstFilter[] = [];
  richiesteFilters.push({
    name: 'Datore',
    type: 'select',
    value: null,
    propName: 'datore',
    params: ['Funzionario', 'Operatore', 'Amministratore'],
    iconName: 'person'
  });
  richiesteFilters.push({
    name: 'Tipo Delega',
    type: 'select',
    value: null,
    propName: 'tipoDelega',
    params: ['Tipo 1', 'Tipo 2', 'Tipo 3'],
    iconName: 'description'
  });
  richiesteFilters.push({
    name: 'Data Inizio',
    type: 'date',
    value: null,
    propName: 'dataInizio',
    params: 'before',
    iconName: 'today'
  });
  richiesteFilters.push({
    name: 'Data Fine',
    type: 'date',
    value: null,
    propName: 'dataFine',
    params: 'after',
    iconName: 'today'
  });
  return richiesteFilters;
}

export function getRichiesteColumns(): any {
  const dataSourceColumns: CstCol[] = [];
  dataSourceColumns.push({
    colType: 'standard',
    propName: 'stato',
    name: 'Stato',
    isFilterEnabled: true,
    propType: 'string',
    backgroundFunction: null,
    pipe: 'statoRichiesta'
  });
  dataSourceColumns.push({
    colType: 'standard',
    propName: 'volontario',
    name: 'Volontario',
    isFilterEnabled: false,
    propType: 'string',
    backgroundFunction: null
  });
  dataSourceColumns.push({
    colType: 'chips',
    propName: 'datoreLavoro',
    name: 'Datore Lavoro',
    isFilterEnabled: false,
    propType: 'string',
    backgroundFunction: null
  });
  dataSourceColumns.push({
    colType: 'standard',
    propName: 'tipoDatore',
    name: 'Tipo Datore',
    isFilterEnabled: false,
    propType: 'string',
    backgroundFunction: null
  });
  dataSourceColumns.push({
    colType: 'standard'
    , propName: 'evento'
    , name: 'Evento'
    , isFilterEnabled: true
    , propType: 'string',
    backgroundFunction: null
  });
  dataSourceColumns.push({
    colType: 'standard',
    propName: 'dataInizio',
    name: 'Data Inizio',
    isFilterEnabled: true,
    propType: 'date',
    backgroundFunction: null
  });
  dataSourceColumns.push({
    colType: 'standard',
    propName: 'dataFine',
    name: 'Data Fine',
    isFilterEnabled: true,
    propType: 'date',
    backgroundFunction: null
  });
  dataSourceColumns.push({
    colType: 'standard'
    , propName: 'giorni'
    , name: 'Giorni'
    , isFilterEnabled: true
    , propType: 'number',
    backgroundFunction: null
  });
  dataSourceColumns.push({
    colType: 'standard'
    , propName: 'importo'
    , name: 'Importo'
    , isFilterEnabled: true
    , propType: 'number',
    backgroundFunction: null
  });

  return dataSourceColumns;
}
