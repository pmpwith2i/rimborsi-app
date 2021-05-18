// Angular Modules
import {Injectable} from '@angular/core';
import {CstCol} from '../shared/cst-table/classes/cst-col';
import {Delega} from '../shared/model/delega';
import {CstFilter} from '../shared/cst-table/classes/cst-filter';

@Injectable()
export class Constants {
  public readonly API_ENDPOINT: string = 'domain/api';
  public readonly API_MOCK_ENDPOINT: string = 'http://localhost:3000';
}

function delegaBackgroundFunctionFunzionario(anItem: Delega): string {
  if (anItem.tipoDatore === 'FUNZIONARIO') {
    return 'orange';
  }

  if (anItem.tipoDatore === 'AMMINISTRATORE') {
    return 'greenyellow';
  }

  if (anItem.tipoDatore === 'OPERATORE') {
    return 'cyan';
  }


  return '#efefef';
}

export function getDelegheFilters(): any {
  const delegheFilters: CstFilter[] = [];
  delegheFilters.push({
    name: 'Datore',
    type: 'select',
    value: null,
    propName: 'tipoDatore',
    params: ['Funzionario', 'Operatore', 'Amministratore'],
    iconName: 'person'
  });
  delegheFilters.push({
    name: 'Tipo Delega',
    type: 'select',
    value: null,
    propName: 'tipoDelega',
    params: ['Tipo 1', 'Tipo 2', 'Tipo 3'],
    iconName: 'description'
  });
  delegheFilters.push({
    name: 'Data Inizio',
    type: 'date',
    value: null,
    propName: 'dataInizio',
    params: 'before',
    iconName: 'today'
  });
  delegheFilters.push({
    name: 'Data Fine',
    type: 'date',
    value: null,
    propName: 'dataFine',
    params: 'after',
    iconName: 'today'
  });
  return delegheFilters;
}

export function getDelegheColumns(): any {
  const dataSourceColumns: CstCol[] = [];
  dataSourceColumns.push({
    colType: 'standard',
    propName: 'fiscalCode',
    name: 'CF/Partita IVA',
    isFilterEnabled: true,
    propType: 'string',
    backgroundFunction: null
  });
  dataSourceColumns.push({
    colType: 'chips',
    propName: 'tipoDatore',
    name: 'Tipo Datore',
    isFilterEnabled: false,
    propType: 'string',
    backgroundFunction: delegaBackgroundFunctionFunzionario
  });
  dataSourceColumns.push({
    colType: 'standard',
    propName: 'tipoDelega',
    name: 'Tipo Delega',
    isFilterEnabled: false,
    propType: 'string',
    backgroundFunction: null
  });
  dataSourceColumns.push({
    colType: 'standard'
    , propName: 'name'
    , name: 'Nome'
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

  return dataSourceColumns;
}


