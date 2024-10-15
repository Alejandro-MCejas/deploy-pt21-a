import { Controller } from '@nestjs/common';
import { OrderDetailService } from './order-detail.service';
import { ApiExtraModels } from '@nestjs/swagger';
import { CreateOrderDetailDto } from './dto/createOrderDetail.dto';

@Controller('order-detail')
@ApiExtraModels(CreateOrderDetailDto)
export class OrderDetailController {
  constructor(private readonly orderDetailService: OrderDetailService) {}
}
