import { Injectable } from '@nestjs/common';
import { contributi, datiFinanziari, deleghe, infoPagamento, notifiche, richieste, richiestaIntegrazioni, storico } from './model';

@Injectable()
export class AppService {

  getRichiesta(id: number): any {
    let richiesta = richieste.find(el => el.id == id);
    let resObj = {richiesta: {}, datiFinanziari: {}, contributi: {}, infoPagamento: {}, richiestaIntegrazioni: {}};
    resObj.richiesta = richiesta;
    resObj.datiFinanziari = datiFinanziari;
    resObj.contributi = contributi;
    resObj.infoPagamento = infoPagamento;
    resObj.richiestaIntegrazioni = richiestaIntegrazioni
    return resObj;
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
