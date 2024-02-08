import { Injectable } from '../../../../decorators/di.decorator';
import { User } from '../entity/User';
import { AppDataSource } from '../../../config/DataSource';
import { Repository } from 'typeorm';

export interface UserRepository extends Repository<User> {
    userRepository: Repository<User>;
}

@Injectable()
export class UserRepository {
    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    async saveUser() {
        const name = 'test';
        const age = 500;

        const user = new User();
        user.name = name;
        user.age = age;

        const users = await this.userRepository.save(user);
        return users;
    }

    async getUser(name: string) {
        const user = await this.userRepository.findOne({
            where: { name: name },
        });
        return user;
    }
}
