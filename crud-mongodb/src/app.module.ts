import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CrudModule } from './crud/crud.module';
import { MongooseModule } from '@nestjs/mongoose'
import config from './config/keys';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(config.mongoURI),
    CrudModule,
  ],
})
export class AppModule {}
