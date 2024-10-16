import { Request, Response, Router } from 'express';
import { ClientService } from '../services/ClientService';
import { IClient } from '../models/IClient';

export class ClientController {
    public router: Router;

    constructor(private clientService: ClientService) {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post('/', this.create.bind(this));
        this.router.get('/:id', this.findById.bind(this));
        this.router.put('/:id', this.update.bind(this));
        this.router.delete('/:id', this.delete.bind(this));
    }

    private async create(req: Request, res: Response) {
        const client: IClient = req.body;
        const createdClient = await this.clientService.create(client);
        res.status(201).json(createdClient);
    }

    private async findById(req: Request, res: Response) {
        const client = await this.clientService.findById(req.params.id);
        if (client) {
            res.json(client);
        } else {
            res.status(404).send('Client not found');
        }
    }

    private async update(req: Request, res: Response) {
        const client: IClient = req.body;
        const updatedClient = await this.clientService.update(client);
        if (updatedClient) {
            res.json(updatedClient);
        } else {
            res.status(404).send('Client not found');
        }
    }

    private async delete(req: Request, res: Response) {
        await this.clientService.delete(req.params.id);
        res.status(204).send();
    }
}
