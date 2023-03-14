import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToDoModule } from './to-do/to-do.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }), 
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => ({
        type: 'postgres',
        host: cfg.get('PG_HOST'),
        port: cfg.get<number>('PG_PORT'),
        username: cfg.get('PG_USER'),
        password: cfg.get('PG_PASS'),
        database: cfg.get('PG_DB'),
        synchronize: true,
        autoLoadEntities: true
      })
    }), ToDoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
