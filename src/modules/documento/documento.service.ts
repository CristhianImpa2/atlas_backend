import { Injectable } from '@nestjs/common';

@Injectable()
export class DocumentoService {
    private documentos = [
        { id: 1, title: 'Documento 1', content: 'Contenido del documento 1' },
        { id: 2, title: 'Documento 2', content: 'Contenido del documento 2' },
        { id: 3, title: 'Documento 3', content: 'Contenido del documento 3' },  
    ];

    getDocumentos(){
        return ['Retornando todos los documentos'];
    }

    getAll(){
        return this.documentos;
    }
}