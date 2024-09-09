import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CredentialsDto } from "./dto/credentials.dto";
import { AuthGuard } from "./AuthGuard.guard";



@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('signin')
    @UseGuards(AuthGuard)
    async signInController(@Body() user: CredentialsDto) {
        const { email, password } = user

        const data = await this.authService.signInService(email, password)

        if (!data) {
            return { message: "Email o contraseña incorrectos" }
        }

        return { message: "Login correcto" }
    }
}