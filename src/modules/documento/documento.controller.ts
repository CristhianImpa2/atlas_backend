import { Controller, Get, HttpCode, Param, Post, Put, Delete } from '@nestjs/common';
import { DocumentoService } from './documento.service';

@Controller('documento')
export class DocumentoController {
    
    constructor(private documentoService: DocumentoService) {}

  @Get()
  findAll() {
    return this.documentoService.getAll();
  }
  
  @Get(':id')
    findOne(@Param('id') id: string): string {
        return `Datos del documento con ID #${id}`;

    }

    @Post()
    @HttpCode(201)
    create(): string {
        return 'Documento creado';
    }

    @Put(':id')
    update(@Param('id') id: string): string {
        return `Documento actualizado con ID #${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string): string {
        return `Documento eliminado con ID #${id}`;
    }
}   

