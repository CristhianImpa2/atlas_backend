import { Controller, Get, HttpCode, Param, Post, Put, Delete } from '@nestjs/common';
import { TipoDocumentoService } from './tipo-documento.service';

@Controller('tipo-documento')
export class TipoDocumentoController {
    
    constructor(private tipoDocumentoService: TipoDocumentoService) {}

  @Get()
  findAll() {
    return this.tipoDocumentoService.getAll();
  }
  
  @Get(':id')
    findOne(@Param('id') id: string): string {
        return `Datos del tipo de documento con ID #${id}`;

    }

    @Post()
    @HttpCode(201)
    create(): string {
        return 'Tipo de documento creado';
    }

    @Put(':id')
    update(@Param('id') id: string): string {
        return `Tipo de documento actualizado con ID #${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string): string {
        return `Tipo de documento eliminado con ID #${id}`;
    }
}   

