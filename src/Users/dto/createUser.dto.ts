import { IsEmail, IsNotEmpty, IsNumberString, IsOptional, IsString, Length, Matches } from "class-validator"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @Length(3, 80)
    name: string

    @IsEmail()
    email: string

    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,15}$/)
    password: string

    @IsString()
    @Length(3, 80)
    address: string

    @IsNumberString()
    @IsNotEmpty()
    phone: string

    @IsOptional()
    @IsString()
    @Length(5,20)
    country?: string

    @IsOptional()
    @IsString()
    @Length(5,20)
    city?: string
}