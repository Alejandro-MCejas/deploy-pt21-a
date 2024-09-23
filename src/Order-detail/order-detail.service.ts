import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDetails } from 'src/entities/orderDetails.entity';
import { Repository } from 'typeorm';
import { CreateOrderDetailDto } from './dto/createOrderDetail.dto';

@Injectable()
export class OrderDetailService {
    constructor(@InjectRepository(OrderDetails) private readonly orderDetailRepository: Repository<OrderDetails>){}

    async createOrderDetailService(orderDetail: CreateOrderDetailDto){
        const newOrderDetail = await this.orderDetailRepository.save(
            this.orderDetailRepository.create(orderDetail)
        )

        return newOrderDetail
    }
    

    async getOrderDetailByOrderIdService(orderId: string, relations: string[]){
        const orderDetail = await this.orderDetailRepository.findOne({
            where: {order: {id: orderId}},
            relations: relations
        })

        return orderDetail
    }
}
