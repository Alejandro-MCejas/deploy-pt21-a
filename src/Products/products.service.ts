import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsService{
    getProductsService(){
        return "Hola desde el servicio de productos"
    }
}