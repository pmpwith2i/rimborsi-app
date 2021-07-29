import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getDeleghe(): any;
    getRichieste(): any;
    getRichiesta(params: any): any;
    getStorico(): any;
    getNotifiche(): any;
}
