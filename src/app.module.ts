import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UsersModule } from './Users/users.module';
import { ProductsModule } from './Products/products.module';
import { AuthModule } from './Auth/auth.module';
import { databaseConfig } from './config/database.config';

@Module({
  imports: [UsersModule, ProductsModule, AuthModule, databaseConfig],
  controllers: [],
  providers: [],
})
export class AppModule { }
