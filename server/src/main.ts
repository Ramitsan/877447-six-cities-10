import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule, {cors: true});
  await app.listen(process.env.PORT || 3000);
  console.log(process.env.HOST, process.env.PORT);
}
bootstrap();
