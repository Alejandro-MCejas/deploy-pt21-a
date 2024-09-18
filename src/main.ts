import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { loggerGlobal } from './middlewares/loggerGlobal.middleware';
import { CategoriesSeed } from './seeds/categories/categories.seed';
import { ProductsSeed } from './seeds/products/products.seed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(loggerGlobal);
  const categoriesSeed = app.get(CategoriesSeed)
  await categoriesSeed.seedCategories()
  console.log('Categories seeded');

  const productsSeed = app.get(ProductsSeed)
  await productsSeed.seedProducts()
  console.log('Products seeded');
  
  
  await app.listen(3000);
}
bootstrap();
