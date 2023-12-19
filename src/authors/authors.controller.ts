import {
  Controller,
  Get,
  Param,
  // Delete,
  // Post,
  // Put,
  // Body,
  NotFoundException,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { ParseUUIDPipe } from '@nestjs/common';

@Controller('authors')
export class AuthorsController {
  constructor(private authorsService: AuthorsService) {}

  @Get('/')
  getAll(): any {
    return this.authorsService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const prod = await this.authorsService.getById(id);
    if (!prod) throw new NotFoundException('Author not found');
    return prod;
  }
}
