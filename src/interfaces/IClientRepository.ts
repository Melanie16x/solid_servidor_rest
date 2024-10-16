import { IClient } from '../models/IClient';

export interface IClientRepository {
    create(client: IClient): Promise<IClient>;
    findById(id: string): Promise<IClient | null>;
    update(client: IClient): Promise<IClient | null>;
    delete(id: string): Promise<void>;
}
