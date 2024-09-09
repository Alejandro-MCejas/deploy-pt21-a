import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/createProduct.dto";
import { UpdateProductDto } from "./dto/updateProduct.dto";



@Injectable()
export class ProductsRepository {
    private products = [
        {
            id: 1,
            name: 'Tablet',
            description: '10-inch tablet with high-resolution display.',
            price: 499.99,
            stock: false,
            imgUrl: 'http://example.com/tablet.jpg',
        },
        {
            id: 2,
            name: 'Camera',
            description: 'DSLR camera with 24MP sensor and 4K video recording.',
            price: 749.99,
            stock: true,
            imgUrl: 'http://example.com/camera.jpg',
        },
        {
            id: 3,
            name: 'Printer',
            description: 'Wireless color printer with scanning and copying functions.',
            price: 149.99,
            stock: false,
            imgUrl: 'http://example.com/printer.jpg',
        },
        {
            id: 4,
            name: 'Monitor',
            description: '27-inch 4K monitor with adjustable stand.',
            price: 329.99,
            stock: true,
            imgUrl: 'http://example.com/monitor.jpg',
        },
        {
            id: 5,
            name: 'Keyboard',
            description: 'Wireless mechanical keyboard with numeric keypad.',
            price: 49.99,
            stock: true,
            imgUrl: 'http://example.com/keyboard.jpg',
        },
        {
            id: 6,
            name: 'Headphones',
            description: 'Wireless noise-cancelling headphones with microphone.',
            price: 99.99,
            stock: true,
            imgUrl: 'http://example.com/headphones.jpg',
        },
        {
            id: 7,
            name: 'Speaker',
            description: 'Wireless subwoofer with active noise cancellation.',
            price: 199.99,
            stock: false,
            imgUrl: 'http://example.com/speaker.jpg',
        },
        {
            id: 8,
            name: 'Mouse',
            description: 'Wireless mouse with adjustable DPI and scrolling speed.',
            price: 29.99,
            stock: true,
            imgUrl: 'http://example.com/mouse.jpg',
        },
        {
            id: 9,
            name: 'Keyboard',
            description: 'Wireless mechanical keyboard with numeric keypad.',
            price: 49.99,
            stock: true,
            imgUrl: 'http://example.com/keyboard.jpg',
        },
        {
            id: 10,
            name: 'Headphones',
            description: 'Wireless noise-cancelling headphones with microphone.',
            price: 99.99,
            stock: true,
            imgUrl: 'http://example.com/headphones.jpg',
        },
        {
            id: 11,
            name: 'PRUEBA',
            description: 'Wireless subwoofer with active noise cancellation.',
            price: 199.99,
            stock: false,
            imgUrl: 'http://example.com/speaker.jpg',
        },
        {
            id: 12,
            name: 'PRUEBA2',
            description: 'Wireless mouse with adjustable DPI and scrolling speed.',
            price: 29.99,
            stock: true,
            imgUrl: 'http://example.com/mouse.jpg',
        },
    ]

    async getProductsRepository(page: number, limit: number) {
        const startIndex = (page - 1) * limit
        const endIndex = startIndex + limit
        return this.products.slice(startIndex, endIndex)
    }

    async getProductByIdRepository(id: number) {
        const product = this.products.find(user => user.id === id)
        return product
    }

    async createProductRepository(product: CreateProductDto) {
        const newProduct = {
            id: this.products.length + 1,
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock,
            imgUrl: product.imgUrl
        }

        this.products.push(newProduct)

        return newProduct
    }

    async updateProductRepository(id: number, product: UpdateProductDto) {
        const updatedProduct = this.products.find(product => product.id === id)

        if (!updatedProduct) {
            return null
        }

        Object.assign(updatedProduct, product)

        return updatedProduct
    }

    async deleteProductRepository(id: number) {
        const deletedProduct = this.products.find(product => product.id === id)
        this.products = this.products.filter(product => product.id !== id)
        return deletedProduct
    }
}