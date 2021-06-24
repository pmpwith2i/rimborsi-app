import { Injectable } from '@nestjs/common';
import { deleghe, notifiche, richieste, storico } from './model';

@Injectable()
export class AppService {
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
