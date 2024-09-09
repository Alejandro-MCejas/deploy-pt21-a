import { TypeOrmModule } from "@nestjs/typeorm";


export const databaseConfig = TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'PostgreSQLAlejandro',
    database: '',
    entities: [],
    synchronize: true,
    dropSchema: true,
    logging: true
})