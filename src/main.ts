import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { initSwagger } from './app.swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  initSwagger(app);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3001);
}
bootstrap();
