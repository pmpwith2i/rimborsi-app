import { Controller, Get, Param, Patch } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Patch('richieste/:id/:state')
  patchRichiestaStato(@Param('id') id: number, @Param('state') state: number): any {
    return this.appService.setStatoRichiesta(id,+state);
  }

  @Get('deleghe')
  getDeleghe(): any {
    return this.appService.getDeleghe();
  }

  @Get('richieste')
  getRichieste(): any {
    return this.appService.getRichieste();
  }

  @Get('richieste/:id')
  getRichiesta(@Param() params): any {
    return this.appService.getRichiesta(params.id)
  }

  @Get('schede/:id')
  getScheda(@Param() params): any {
    return this.appService.getScheda(params.id)
  }

  @Get('storico')
  getStorico(): any {
    return this.appService.getStorico();
  }

  @Get('notifiche')
  getNotifiche(): any {
    return this.appService.getNotifiche();
  }
}
