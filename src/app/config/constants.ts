// Angular Modules
import {Injectable} from '@angular/core';
import {CstCol} from '../shared/elements/cst-table/classes/cst-col';
import {Delega} from '../shared/model/delega';
import {CstFilter} from '../shared/elements/cst-table/classes/cst-filter';
import {SidebarRoute} from '../shared/model/route';

@Injectable()
export class Constants {
  public readonly API_ENDPOINT: string = 'domain/api';
  public readonly API_MOCK_ENDPOINT: string = 'http://localhost:3000';
}

function delegaBackgroundFunctionFunzionario(anItem: Delega): string {
  if (anItem.verificata) {
    return 'greenyellow';
  }

  return '#efefef';
}

export function getIstruttoreSidebar(): SidebarRoute[] {
  const sidebarRoutes: SidebarRoute[] = [];
  sidebarRoutes.push(new SidebarRoute({itemLink: 'dashboard', linkName: 'Dashboard', iconName: 'home'}));
  sidebarRoutes.push(new SidebarRoute({itemLink: 'richieste', linkName: 'Richieste in corso', iconName: 'info'}));
  sidebarRoutes.push(new SidebarRoute({itemLink: 'richieste', linkName: 'Richieste passate', iconName: 'info'}));
  sidebarRoutes.push(new SidebarRoute({itemLink: 'richieste', linkName: 'Richieste in liquidazione', iconName: 'info'}));
  sidebarRoutes.push(new SidebarRoute({itemLink: 'deleghe', linkName: 'Verifica Procure', iconName: 'description'}));
  sidebarRoutes.push(new SidebarRoute({itemLink: 'notifiche', linkName: 'Notifiche', iconName: 'notifications'}));

  return sidebarRoutes;
}

export function getVolontarioRoutesSidebar(): SidebarRoute[] {
  const sidebarRoutes: SidebarRoute[] = [];
  sidebarRoutes.push(new SidebarRoute({itemLink: 'dashboard', linkName: 'Dashboard', iconName: 'home'}));
  sidebarRoutes.push(new SidebarRoute({itemLink: 'user-info', linkName: 'I miei dati', iconName: 'person'}));
  sidebarRoutes.push(new SidebarRoute({itemLink: 'richieste', linkName: 'Richieste', iconName: 'info'}));
  sidebarRoutes.push(new SidebarRoute({itemLink: 'deleghe', linkName: 'Procure', iconName: 'description'}));
  sidebarRoutes.push(new SidebarRoute({itemLink: 'notifiche', linkName: 'Notifiche', iconName: 'notifications'}));

  return sidebarRoutes;
}

export function getDelegheFilters(): any {
  const delegheFilters: CstFilter[] = [];
  delegheFilters.push({
    name: 'Datore',
    type: 'select',
    value: null,
    propName: 'datore',
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
    colType: 'chips',
    propName: 'verificata',
    name: 'Verificata',
    isFilterEnabled: true,
    propType: 'boolean',
    backgroundFunction: delegaBackgroundFunctionFunzionario
  });
  dataSourceColumns.push(new CstCol({
    colType: 'standard',
    propName: 'fiscalCode',
    name: 'CF/Partita IVA',
    isFilterEnabled: true,
    propType: 'string'
  }));
  dataSourceColumns.push({
    colType: 'chips',
    propName: 'datoreLavoro',
    name: 'Datore',
    isFilterEnabled: false,
    propType: 'string',
    backgroundFunction: null
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

export function getNotificheColumns(): any {
  const dataSourceColumns: CstCol[] = [];
  dataSourceColumns.push({
    colType: 'standard',
    propName: 'notifica',
    name: 'Notifica',
    isFilterEnabled: true,
    propType: 'string',
    backgroundFunction: null
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
    backgroundFunction: delegaBackgroundFunctionFunzionario
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

  return dataSourceColumns;
}


export function getNotificheFilters(): any {
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
