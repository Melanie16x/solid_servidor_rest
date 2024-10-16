import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { VehicleController } from '../controllers/VehicleController';
import { ClientController } from '../controllers/ClientController';
import { VehicleService } from '../services/VehicleService';
import { ClientService } from '../services/ClientService';
import { MongoVehicleRepository } from '../repositories/MongoVehicleRepository';
import { ClientRepository } from '../repositories/ClientRepository';

export class Server {
    private app: express.Application;
    private port: number;
    private vehicleController: VehicleController = new VehicleController(new VehicleService(new MongoVehicleRepository()));
    private clientController: ClientController = new ClientController(new ClientService(new ClientRepository()));

    constructor() {
        this.app = express();
        this.port = 3000;
        this.Middleware();
    }

    private Middleware() {
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}
