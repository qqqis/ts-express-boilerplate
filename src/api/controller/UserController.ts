import { Injectable } from '../../decorators/di.decorator'
import { Route } from '../../decorators/route.decorator'
import { UserService } from '../service/UserService'
import { Request, Response, NextFunction } from 'express'
import RequestBuilder, { ControllerRequest } from '../request/RequestBuilder'

@Injectable()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Route('get', '/users')
    async getUser(req: Request, res: Response, next: NextFunction) {
        try {
            const userName = req.query.userName as string

            const request: ControllerRequest = new RequestBuilder()
                .setName(userName)
                .build()
    
            const result = await this.userService.getUser(request);
            res.json(result)
        } catch (error) {
            res.json(error)
        }

    }
}
