import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "./products.repository";
import { CreateProductDto } from "./dto/createProduct.dto";
import { UpdateProductDto } from "./dto/updateProduct.dto";

@Injectable()
export class ProductsService{
    constructor(private productsRepository: ProductsRepository){}

    getProductsService(page: number, limit: number){
        return this.productsRepository.getProductsRepository(page, limit)
    }

    getProductByIdService(id: number){
        return this.productsRepository.getProductByIdRepository(id)
    }

    createProductService(product: CreateProductDto){
        return this.productsRepository.createProductRepository(product)
    }

    updateProductService(id: number, product: UpdateProductDto){
        return this.productsRepository.updateProductRepository(id, product)
    }

    deleteProductService(id: number){
        return this.productsRepository.deleteProductRepository(id) 
    }
}