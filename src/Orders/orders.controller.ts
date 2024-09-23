import { Body, Controller, Get, Param, Post} from "@nestjs/common";
import { CreateOrderDto } from "./dto/createOrder.dto";
import { OrdersService } from "./orders.service";


@Controller('orders')
export class OrdersController { 
    constructor(private readonly ordersService: OrdersService){}
    
    @Post()
    async createOrder(@Body() order: CreateOrderDto) {
        return await this.ordersService.addOrder(order)

    }

    @Get(':id')
    async getOrder(@Param('id') id: string){
        return await this.ordersService.getOrder(id)
    }
}