
import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";


@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request: Request = context.switchToHttp().getRequest();

        const authHeader = request.header('Authorization');
        if (!authHeader) {
            throw new HttpException('Not authorized', HttpStatus.UNAUTHORIZED);
        }
        
        
        const [type, credentials] = authHeader.split(' ');

        if (type !== 'Basic' || !credentials) {
            throw new HttpException('Not authorized', HttpStatus.UNAUTHORIZED);
        }

        const decodedCredentials = Buffer.from(credentials, 'base64').toString('utf-8')

        const [email, password] = decodedCredentials.split(':')

        if (!email || !password) {
            throw new HttpException('Not authorized', HttpStatus.UNAUTHORIZED);
        }
        

        return true
    }

}