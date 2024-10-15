import { ApiProperty } from "@nestjs/swagger"

export class CreateOrderDetailDto {
    @ApiProperty({
        description: 'The price of the product',
    })
    price: number

    @ApiProperty({
        description: 'The order',
    })
    order: object

    @ApiProperty({
        description: 'The products',
    })
    products: Array<object>
}