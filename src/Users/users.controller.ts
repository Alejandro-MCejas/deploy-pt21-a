import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";



@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get()
    getUsersController(){
        return this.usersService.getUsersService()
    }
}