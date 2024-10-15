import { Body, Controller, Get, Param, ParseUUIDPipe, Post, UseGuards} from "@nestjs/common";
import { CreateOrderDto } from "./dto/createOrder.dto";
import { OrdersService } from "./orders.service";
import { AuthGuard } from "src/Auth/AuthGuard.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiBearerAuth()
@ApiTags('Orders')
@Controller('orders')
export class OrdersController { 
    constructor(private readonly ordersService: OrdersService){}
        
    @Post()
    @UseGuards(AuthGuard)
    async createOrder(@Body() order: CreateOrderDto) {
        return await this.ordersService.addOrder(order)

    }

    @Get(':id')
    @UseGuards(AuthGuard)
    async getOrder(@Param('id', new ParseUUIDPipe()) id: string){
        return await this.ordersService.getOrder(id)
    }
}