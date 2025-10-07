import { Produto } from '../entities/produto.entity';
import { ProdutoService } from './../services/produto.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

@Controller('/produtos')
export class ProdutoController {
  constructor(private readonly ProdutoService: ProdutoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Produto[]> {
    return this.ProdutoService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
    return this.ProdutoService.findById(id);
  }

  @Get('produto/:nome')
  @HttpCode(HttpStatus.OK)
  findAllByName(@Param('nome') nome: string): Promise<Produto[]> {
    return this.ProdutoService.findAllByName(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() produto: Produto): Promise<Produto> {
    return this.ProdutoService.create(produto);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  async update(@Body() produto: Produto): Promise<Produto> {
    await this.findById(produto.id);

    return this.ProdutoService.create(produto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.ProdutoService.delete(id);
  }
}
