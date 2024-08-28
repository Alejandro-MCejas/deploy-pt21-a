import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService{
    getHelloService(){
        return 'Hola desde el servicio de auth'
    }
}