import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNotEmpty, IsEmail, Matches, Length, IsNumberString, IsOptional } from "class-validator"



export class SignUpDto {
    @ApiProperty({
        example: 'Alejandro Cejas',
    })
    @IsString()
    @IsNotEmpty()
    @Length(3, 80)
    name: string

    @ApiProperty({
        example: 'ale@gmail.com',
    })
    @IsEmail()
    email: string

    @ApiProperty({
        example: 'Alejandro123@'
    })
    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,15}$/)
    password: string

    @ApiProperty({
        example: 'Alejandro123@'
    })
    @IsNotEmpty()
    @IsString()
    confirmPassword: string

    @ApiProperty({
        example: 'Cordoba 530'
    })
    @IsString()
    @Length(3, 80)
    address: string

    @ApiProperty({
        example: '32894732784'
    })
    @IsNumberString()
    @IsNotEmpty()
    phone: string

    @ApiProperty({
        example: 'Argentina'
    })
    @IsOptional()
    @IsString()
    @Length(5, 20)
    country?: string

    @ApiProperty({
        example: 'Cordoba'
    })
    @IsOptional()
    @IsString()
    @Length(5, 20)
    city?: string
}