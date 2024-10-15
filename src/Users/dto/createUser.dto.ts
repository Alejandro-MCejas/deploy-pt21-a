import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsNumberString, IsOptional, IsString, Length, Matches } from "class-validator"

export class CreateUserDto {
    @ApiProperty({
        description: 'The name of the user'
    })
    @IsString()
    @IsNotEmpty()
    @Length(3, 80)
    name: string

    @ApiProperty({
        description: 'The email of the user'
    })
    @IsEmail()
    email: string

    @ApiProperty({
        description: 'The password of the user'
    })
    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,15}$/)
    password: string

    @ApiProperty({
        description: 'The address of the user'
    })
    @IsString()
    @Length(3, 80)
    address: string

    @ApiProperty({
        description: 'The phone of the user'
    })
    @IsNumberString()
    @IsNotEmpty()
    phone: string

    @ApiProperty({
        description: 'The country of the user'
    })
    @IsOptional()
    @IsString()
    @Length(5,20)
    country?: string

    @ApiProperty({
        description: 'The city of the user'
    })
    @IsOptional()
    @IsString()
    @Length(5,20)
    city?: string
}