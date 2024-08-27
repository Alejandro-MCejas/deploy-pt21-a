import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService{
    getHelloService(){
        return 'Hello World Service!'
    }
}