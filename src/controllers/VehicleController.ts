import { Request, Response, Router } from 'express';
import { VehicleService } from '../services/VehicleService';
import { IVehicle } from '../models/IVehicle';

export class VehicleController {
    public router: Router;

    constructor(private vehicleService: VehicleService) {
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
        const vehicle: IVehicle = req.body;
        const createdVehicle = await this.vehicleService.create(vehicle);
        res.status(201).json(createdVehicle);
    }

    private async findById(req: Request, res: Response) {
        const vehicle = await this.vehicleService.findById(req.params.id);
        if (vehicle) {
            res.json(vehicle);
        } else {
            res.status(404).send('Vehicle not found');
        }
    }

    private async update(req: Request, res: Response) {
        const vehicle: IVehicle = req.body;
        const updatedVehicle = await this.vehicleService.update(vehicle);
        if (updatedVehicle) {
            res.json(updatedVehicle);
        } else {
            res.status(404).send('Vehicle not found');
        }
    }

    private async delete(req: Request, res: Response) {
        await this.vehicleService.delete(req.params.id);
        res.status(204).send();
    }
}
