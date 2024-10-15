import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNotEmpty, IsEmail, Matches, Length, IsNumberString, IsOptional } from "class-validator"



export class SignUpDto {
    @ApiProperty({
        description: 'The name of the user',
        example: 'Alejandro Cejas',
    })
    @IsString()
    @IsNotEmpty()
    @Length(3, 80)
    name: string

    @ApiProperty({
        description: 'The email of the user',
        example: 'ale@gmail.com',
    })
    @IsEmail()
    email: string

    @ApiProperty({
        description: 'The password of the user',
        example: 'Alejandro123@'
    })
    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,15}$/)
    password: string

    @ApiProperty({
        description: 'The confirm password of the user',
        example: 'Alejandro123@'
    })
    @IsNotEmpty()
    @IsString()
    confirmPassword: string

    @ApiProperty({
        description: 'The address of the user',
        example: 'Cordoba 530'
    })
    @IsString()
    @Length(3, 80)
    address: string

    @ApiProperty({
        description: 'The phone of the user',
        example: '32894732784'
    })
    @IsNumberString()
    @IsNotEmpty()
    phone: string

    @ApiProperty({
        description: 'The country of the user',
        example: 'Argentina'
    })
    @IsOptional()
    @IsString()
    @Length(5, 20)
    country?: string

    @ApiProperty({
        description: 'The city of the user',
        example: 'Cordoba'
    })
    @IsOptional()
    @IsString()
    @Length(5, 20)
    city?: string
}