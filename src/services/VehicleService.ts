import { IVehicleRepository } from '../interfaces/IVehicleRepository';
import { IVehicle } from '../models/IVehicle';

export class VehicleService {
    constructor(private vehicleRepository: IVehicleRepository) {}

    async create(vehicle: IVehicle) {
        return this.vehicleRepository.create(vehicle);
    }

    async findById(id: string) {
        return this.vehicleRepository.findById(id);
    }

    async update(vehicle: IVehicle) {
        return this.vehicleRepository.update(vehicle);
    }

    async delete(id: string) {
        return this.vehicleRepository.delete(id);
    }
}
