import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Evento } from './eventos/entity/evento.entity';
import { EventosController } from './eventos/eventos.controller';
import { EventosService } from './eventos/eventos.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'paco',
      password: '12345678',
      database: 'test_nestjs',
      entities: [
                  './eventos/entities/*.entity(.ts,.js)'
                ],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Evento]),
    AuthModule,
    UsersModule
  ],
  controllers: [AppController, EventosController],
  providers: [AppService, EventosService],
})
export class AppModule {}
