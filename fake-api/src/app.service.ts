import { Injectable } from '@nestjs/common';
import { contributi, datiFinanziari, deleghe, infoPagamento, notifiche, richieste, richiestaIntegrazioni, storico, schede } from './model';

@Injectable()
export class AppService {

  getRichiesta(id: number): any {
    let richiesta = richieste.find(el => el.id == id);
    let resObj = { richiesta: {}, schede: [], datiFinanziari: {}, contributi: {}, infoPagamento: {}, richiestaIntegrazioni: {} };
    resObj.richiesta = richiesta;
    resObj.schede = schede;
    let schedaId = schede[0].id;
    resObj.datiFinanziari = datiFinanziari.find(el => el.idScheda == schedaId);
    resObj.contributi = contributi.find(el => el.idScheda == schedaId);
    resObj.infoPagamento = infoPagamento;
    resObj.richiestaIntegrazioni = richiestaIntegrazioni
    return resObj;
  }

  getScheda(schedaId: number): any {
    let resObj = { datiFinanziari: {}, contributi: {}, infoPagamento: {}, richiestaIntegrazioni: {} };
    resObj.datiFinanziari = datiFinanziari.find(el => el.idScheda == schedaId);
    resObj.contributi = contributi.find(el => el.idScheda == schedaId);
    resObj.infoPagamento = infoPagamento;
    resObj.richiestaIntegrazioni = richiestaIntegrazioni
    return resObj;
  }

  setStatoRichiesta(id:number, state:number): any {
    richieste.find(el => el.id==id).stato = +state;
    return true;
  }

  getHello(): string {
    return 'Hello World!';
  }

  getDeleghe(): any {
    return deleghe;
  }

  getRichieste(): any {
    return richieste;
  }

  getStorico(): any {
    return storico;
  }

  getNotifiche(): any {
    return notifiche;
  }
}
