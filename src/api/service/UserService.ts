import { Injectable } from '../../decorators/di.decorator';
import { UserRepository } from '../../domain/rds/user/repository/UserRepository';
import { ControllerRequest } from '../request/RequestBuilder';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async getUser(reqData: ControllerRequest) {
        const userName = reqData.getName();

        return await this.userRepository.getUser(userName);
    }
}
