import { Injectable } from '../../../../decorators/di.decorator'
import { User } from '../entity/User'
import { AppDataSource } from '../../../config/DataSource'
import { Repository } from 'typeorm'

export interface UserRepository extends Repository<User> {
    userRepository: Repository<User>
}

@Injectable()
export class UserRepository {
    constructor(){
        this.userRepository = AppDataSource.getRepository(User)
    }

    async saveUser() {
        const name = 'test'
        const email = 'sample@naver.com'

        const user = new User()
        user.userName = name
        user.email = email

        const users = await this.userRepository.save(user)
        return users;
    }

    async getUser(name: string) {
        const user = await this.userRepository.findOne({
            where: {
              userName: name,
            },
          })
        return user
    }
}
