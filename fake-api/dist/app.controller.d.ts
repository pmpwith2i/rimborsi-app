import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    patchRichiestaStato(id: number, state: number): any;
    getDeleghe(): any;
    getRichieste(): any;
    getRichiesta(params: any): any;
    getScheda(params: any): any;
    getStorico(): any;
    getNotifiche(): any;
}
