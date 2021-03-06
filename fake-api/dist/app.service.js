"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const model_1 = require("./model");
let AppService = class AppService {
    getRichiesta(id) {
        let richiesta = model_1.richieste.find(el => el.id == id);
        let resObj = { richiesta: {}, schede: [], datiFinanziari: {}, contributi: {}, infoPagamento: {}, richiestaIntegrazioni: {} };
        resObj.richiesta = richiesta;
        resObj.schede = model_1.schede;
        let schedaId = model_1.schede[0].id;
        resObj.datiFinanziari = model_1.datiFinanziari.find(el => el.idScheda == schedaId);
        resObj.contributi = model_1.contributi.find(el => el.idScheda == schedaId);
        resObj.infoPagamento = model_1.infoPagamento;
        resObj.richiestaIntegrazioni = model_1.richiestaIntegrazioni;
        return resObj;
    }
    getScheda(schedaId) {
        let resObj = { datiFinanziari: {}, contributi: {}, infoPagamento: {}, richiestaIntegrazioni: {} };
        resObj.datiFinanziari = model_1.datiFinanziari.find(el => el.idScheda == schedaId);
        resObj.contributi = model_1.contributi.find(el => el.idScheda == schedaId);
        resObj.infoPagamento = model_1.infoPagamento;
        resObj.richiestaIntegrazioni = model_1.richiestaIntegrazioni;
        return resObj;
    }
    setStatoRichiesta(id, state) {
        model_1.richieste.find(el => el.id == id).stato = +state;
        return true;
    }
    getHello() {
        return 'Hello World!';
    }
    getDeleghe() {
        return model_1.deleghe;
    }
    getRichieste() {
        return model_1.richieste;
    }
    getStorico() {
        return model_1.storico;
    }
    getNotifiche() {
        return model_1.notifiche;
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map