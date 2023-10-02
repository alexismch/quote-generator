import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

import { CoreModule } from './core.module';

async function bootstrap() {
   const app = await NestFactory.create(CoreModule);
   const configService = app.get(ConfigService);

   // = CORS
   app.enableCors({
      origin: configService.get('SERVER_ORIGIN')
         ? configService.get('SERVER_ORIGIN').split(',')
         : '*',
      credentials: true,
   });

   // Middlewares
   app.use(cookieParser(configService.get('COOKIE_SECRET')));
   app.use(helmet());

   // = Global Pipes
   app.useGlobalPipes(
      new ValidationPipe({
         whitelist: true,
         transform: true,
         validationError: {
            target: false,
            value: false,
         },
      }),
   );

   app.enableShutdownHooks();

   const port = configService.get('PORT') || 3000;
   await app.listen(port);

   Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
