import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CrudController } from './crud.controller';
import { CrudService } from './crud.service';
import { CrudSchema } from './schemas/crud.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Crud',
        schema: CrudSchema
      }
    ])
  ],
  controllers: [CrudController],
  providers: [CrudService]
})
export class CrudModule {}
