import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const swaggerConf = new DocumentBuilder()
    .setTitle('Backend Beadando')
    .setVersion('0.1.0')
    .addTag('todo', 'Manage To Do entries')
    .build();

  const swaggerDoc = SwaggerModule.createDocument(app, swaggerConf);
  SwaggerModule.setup('api', app, swaggerDoc);
  
  await app.listen(3000);
}

bootstrap();