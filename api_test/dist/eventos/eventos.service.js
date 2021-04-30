"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const evento_entity_1 = require("./entity/evento.entity");
let EventosService = class EventosService {
    constructor(eventoRepository) {
        this.eventoRepository = eventoRepository;
    }
    async getAll() {
        return await this.eventoRepository.find();
    }
    async updateEvento(idEvento, Evento) {
        const EventoUpdate = await this.eventoRepository.findOne(idEvento);
        EventoUpdate.descripción = Evento.descripción;
        EventoUpdate.fecha = Evento.fecha;
        return await this.eventoRepository.save(EventoUpdate);
    }
    async deleteEvento(idEvento) {
        return await this.eventoRepository.delete(idEvento);
    }
};
EventosService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(evento_entity_1.Evento)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EventosService);
exports.EventosService = EventosService;
//# sourceMappingURL=eventos.service.js.map