import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService{
    getUsersService(){
        return "Hola desde el servicio de usuarios"
    }
}