import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsController } from './controllers/events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfig } from './database/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../docker/.env'
    }),
    TypeOrmModule.forRoot(DatabaseConfig.getTypeOrmConfig())
  ],
  controllers: [AppController, EventsController ],
  providers: [AppService],
})
export class AppModule {}
