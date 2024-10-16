import { IClientRepository } from '../interfaces/IClientRepository';
import { IClient } from '../models/IClient';

export class ClientService {
    constructor(private clientRepository: IClientRepository) {}

    async create(client: IClient) {
        return this.clientRepository.create(client);
    }

    async findById(id: string) {
        return this.clientRepository.findById(id);
    }

    async update(client: IClient) {
        return this.clientRepository.update(client);
    }

    async delete(id: string) {
        return this.clientRepository.delete(id);
    }
}
