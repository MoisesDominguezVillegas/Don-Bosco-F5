import { Router, Response, Request } from "express";
import { EventEntity } from "../database/entities/event.entity";
import { EventService } from "../services/event.service"; // import service

export class EventController {
  public router: Router;
  private eventService: EventService; 

  constructor(){
    this.eventService = new EventService(); // Create a new instance of EventController
    this.router = Router();
    this.routes();
  }

  public index = async (req: Request, res: Response) => {
    const events = await this.eventService.index();
    res.send(events).json();
  } 

  public create = async (req: Request, res: Response) => {
    const event = req['body'] as EventEntity;
    const newEvent = await this.eventService.create(event);
    res.send(newEvent);
  }

  public update = async (req: Request, res: Response) => {
    const event = req['body'] as EventEntity;
    const id =  req['params']['id'];
    
    res.send(this.eventService.update(event, Number(id)));
  }

  public delete = async (req: Request, res: Response) => {
    const id =  req['params']['id'];
    res.send(this.eventService.delete(Number(id)));
  } 

  /**
   * Configure the routes of controller
   */
  public routes(){
    this.router.get('/', this.index);
    this.router.post('/', this.create);
    this.router.put('/:id', this.update);
    this.router.delete('/:id', this.delete);
  }
}