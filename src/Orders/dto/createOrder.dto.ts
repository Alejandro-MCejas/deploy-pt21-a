import { ApiProperty } from "@nestjs/swagger"
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString, IsUUID } from "class-validator"

export interface ProductId{
    id: string
}


export class CreateOrderDto{
    @ApiProperty({
        description: 'The id of the user'
    })
    @IsNotEmpty()
    @IsString()
    @IsUUID()
    userId: string

    @ApiProperty({
        description: 'The id of the products'
    })
    @IsArray()
    @ArrayNotEmpty()
    products: Array<ProductId>
}