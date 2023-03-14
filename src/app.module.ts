import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToDoModule } from './to-do/to-do.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }), ToDoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
