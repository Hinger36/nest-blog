import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { initSwagger } from './app.swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  initSwagger(app);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3001);
  logger.log(`Server is running at ${await app.getUrl()}`);
}
bootstrap();
