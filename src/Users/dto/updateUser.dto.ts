import { ApiProperty, PartialType } from "@nestjs/swagger"
import { IsEmail, IsOptional, IsString} from "class-validator"
import { CreateUserDto } from "./createUser.dto"

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @ApiProperty({
        description: 'The email of the user'
    })
    @IsOptional()
    @IsEmail()
    email?: string

    @ApiProperty({
        description: 'The name of the user'
    })
    @IsOptional()
    @IsString()
    name?: string

    @ApiProperty({
        description: 'The password of the user'
    })
    @IsOptional()
    @IsString()
    password?: string

    @ApiProperty({
        description: 'The address of the user'
    })
    @IsOptional()
    @IsString()
    address?: string

    @ApiProperty({
        description: 'The phone of the user'
    })
    @IsOptional()
    @IsString()
    phone?: string

    @ApiProperty({
        description: 'The country of the user'
    })
    @IsOptional()
    @IsString()
    country?: string

    @ApiProperty({
        description: 'The city of the user'
    })
    @IsOptional()
    @IsString()
    city?: string
}