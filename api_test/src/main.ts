import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import * as csurf from 'csurf';
import * as helmet from 'helmet';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });

  //app.use(compression());
  app.use(helmet());
  app.use(csurf());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
