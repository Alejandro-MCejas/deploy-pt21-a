import { IsString, IsNumber, IsBoolean, IsOptional } from "class-validator"



export class UpdateProductDto{
    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    description?: string

    @IsOptional()
    @IsNumber()
    price?: number

    @IsOptional()
    @IsBoolean()
    stock?: boolean

    @IsOptional()
    @IsString()
    imgUrl?: string
}