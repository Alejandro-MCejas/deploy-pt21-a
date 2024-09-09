
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";

function validateRequest(request: Request) {
    const authHeader = request.headers['authorization']
    console.log(request.headers);
    
    if (!authHeader) {
        return false
    }

    const [type, credentials] = authHeader.split(' ')

    if (type !== 'Basic' || !credentials) {
        return false
    }

    const [email, password] = Buffer.from(credentials, 'base64').toString().split(':')

    if (!email || !password) {
        return false
    }

    return true

}


@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return validateRequest(request);

    }

}