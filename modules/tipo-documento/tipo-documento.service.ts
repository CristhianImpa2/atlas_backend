import { Injectable } from '@nestjs/common';

@Injectable()
export class TipoDocumentoService {
    private tipoDocumentos = [
        { id: 1, name: 'Tipo de Documento 1', description: 'Descripción del tipo de documento 1' },
        { id: 2, name: 'Tipo de Documento 2', description: 'Descripción del tipo de documento 2' },
        { id: 3, name: 'Tipo de Documento 3', description: 'Descripción del tipo de documento 3' },  
    ];
    getTipoDocumentos(){
        return ['Retornando todos los tipos de documentos'];
    }

    getAll(){
        return this.tipoDocumentos;
    }
}
