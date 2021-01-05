import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTaskDto';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.taskService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskService.createTask(createTaskDto);
  }

  @Delete('/:id/')
  deleteTask(@Param('id') id: string): void {
    this.taskService.deleteTask(id);
  }

  @Patch('/:id/status')
  modifyTask(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
    ): Task {
      return this.taskService.modifyTask(id, status);
  }
}
