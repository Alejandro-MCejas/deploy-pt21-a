import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/createProduct.dto";
import { UpdateProductDto } from "./dto/updateProduct.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Products } from "src/entities/products.entity";
import { In, MoreThan, Repository } from "typeorm";
import { ProductId } from "src/Orders/dto/createOrder.dto";

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Products) private readonly productsRepository: Repository<Products>) { }

    async getProductsService(page: number, limit: number) {
        const products = await this.productsRepository.find({
            skip: (page - 1) * limit,
            take: limit
        })

        return products
    }

    async getProductByIdService(id: string) {
        const product = await this.productsRepository.findOneBy({ id: id })
        return product
    }

    async createProductService(product: CreateProductDto) {
        const { name } = product

        const existingProduct = await this.productsRepository.findOneBy({ name: name })

        if (existingProduct) {
            throw new Error('El producto ya existe')
        }


        const newProduct = this.productsRepository.create(product)
        return await this.productsRepository.save(newProduct)
    }

    async updateProductService(id: string, product: UpdateProductDto) {
        const existingProduct = await this.productsRepository.findOneBy({ id: id })

        if (!existingProduct) {
            return null
        }

        Object.assign(existingProduct, product)

        return await this.productsRepository.save(existingProduct)
    }

    async deleteProductService(id: string) {
        const productToDelete = await this.productsRepository.findOneBy({ id: id })
        await this.productsRepository.delete(id)
        return productToDelete
    }

    // cambios en a funcion de abajo
    async getProductsWithStockService(productsIds: Array<ProductId>) {

        return await this.productsRepository.find({
            where: {
                id: In(productsIds),
                stock: MoreThan(0)
            },
            select: ['id', 'price', 'stock']
        })

        
    }

    // nueva funcion añadida, buyProduct eliminada
    async reduceProductStockService(id: string){
        const product = await this.getProductByIdService(id)

        if(!product){
            throw new Error('El producto no existe')
        }

        if(product.stock === 0){
            throw new Error('El producto no tiene stock')
        }

        await this.productsRepository.update(id, {
            stock: product.stock - 1
        })
        
    }
    

}