import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res, UseGuards } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Response } from "express";
import { CreateProductDto } from "./dto/createProduct.dto";
import { UpdateProductDto } from "./dto/updateProduct.dto";
import { AuthGuard } from "src/Auth/AuthGuard.guard";






@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    async getProductsController(@Query('page') page: string = '1', @Query('limit') limit: string = '5', @Res() res: Response) {
        const pageNumber = parseInt(page)
        const limitNumber = parseInt(limit)
        
        const products = await this.productsService.getProductsService(pageNumber, limitNumber)
        return res.status(200).json(products)
    }

    @Get(':id')
    async getProductByIdController(@Param('id') id: string, @Res() res: Response) {
        const product = await this.productsService.getProductByIdService(Number(id))
        return res.status(200).json(product)
    }

    @Post()
    @UseGuards(AuthGuard)
    async createProductController(@Body() product: CreateProductDto, @Res() res: Response) {
        const newProduct = await this.productsService.createProductService(product)
        return res.status(201).json({ id: newProduct.id })
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    async updateProductController(@Body() product: UpdateProductDto, @Param('id') id: string, @Res() res: Response) {
        const updatedProduct = await this.productsService.updateProductService(Number(id), product)
        return res.status(200).json({ id: updatedProduct.id })
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    async deleteProductController(@Param('id') id: string, @Res() res: Response) {
        const deletedProduct = await this.productsService.deleteProductService(Number(id))
        return res.status(200).json({ message: `El producto con el id ${deletedProduct.id} ha sido eliminado` })
    }
}