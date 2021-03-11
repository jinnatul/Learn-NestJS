import { Body, Controller, Get, Post } from '@nestjs/common';
import { CrudService } from './crud.service'

@Controller('crud')
export class CrudController {
  constructor(private readonly crudService: CrudService) {}

  @Get('/')
  findAll() {
    return this.crudService.findAll();
  }

  @Post()
  create(@Body() createItemDto) {
    return this.crudService.create(createItemDto);
  }
}