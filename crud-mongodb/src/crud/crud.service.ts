import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CrudService {
  constructor(@InjectModel('Crud') private readonly crudModel) {}

  async findAll() {
    return await this.crudModel.find();
  }

  async create(item) {
    return await this.crudModel.create(item);
  }
}
