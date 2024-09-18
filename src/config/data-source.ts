import { registerAs } from "@nestjs/config";
// import { Users } from "src/entities/users.entity";
// import { Products } from "src/entities/products.entity";
// import { Categories } from "src/entities/categories.entity";
// import { Orders } from "src/entities/orders.entity";
// import { OrderDetails } from "src/entities/orderDetails.entity";
import * as dotenv from 'dotenv'
import { DataSource, DataSourceOptions } from "typeorm";

dotenv.config({
    path: '.env'
})


export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    // dropSchema: true,
    logging: true
}

export const postgresDataSourceConfig = registerAs('postgres', () => dataSourceOptions)

export const PostgresDataSource = new DataSource(dataSourceOptions)
