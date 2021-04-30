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
exports.EventosController = void 0;
const common_1 = require("@nestjs/common");
const create_evento_dto_1 = require("./dto/create-evento-dto");
const eventos_service_1 = require("./eventos.service");
let EventosController = class EventosController {
    constructor(EventosService) {
        this.EventosService = EventosService;
    }
    create(createEventoDto, response) {
        this.EventosService.createEvento(createEventoDto).then(Evento => {
            response.status(common_1.HttpStatus.CREATED).json(Evento);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ Evento: 'error en la creación del Evento' });
        });
    }
    getAll(response) {
        this.EventosService.getAll().then(EventosList => {
            response.status(common_1.HttpStatus.OK).json(EventosList);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ Evento: 'error en la obtención de los Eventos' });
        });
    }
    update(updateEventoDto, response, idEvento) {
        this.EventosService.updateEvento(idEvento, updateEventoDto).then(Evento => {
            response.status(common_1.HttpStatus.CREATED).json(Evento);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ Evento: 'error en la edición del Evento' });
        });
    }
    delete(response, idEvento) {
        this.EventosService.deleteEvento(idEvento).then(Evento => {
            response.status(common_1.HttpStatus.CREATED).json(Evento);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ Evento: 'error en la eliminación del Evento' });
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_evento_dto_1.CreateEventoDto, Object]),
    __metadata("design:returntype", void 0)
], EventosController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EventosController.prototype, "getAll", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Body()), __param(1, common_1.Res()), __param(2, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_evento_dto_1.CreateEventoDto, Object, Object]),
    __metadata("design:returntype", void 0)
], EventosController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], EventosController.prototype, "delete", null);
EventosController = __decorate([
    common_1.Controller('Eventos'),
    __metadata("design:paramtypes", [eventos_service_1.EventosService])
], EventosController);
exports.EventosController = EventosController;
//# sourceMappingURL=eventos.controller.js.map