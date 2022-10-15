import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin:true,
    methods:'POST'
  });
  await app.listen(4000);
}
bootstrap();
