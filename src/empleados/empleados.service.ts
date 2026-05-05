import { Injectable, NotFoundException } from '@nestjs/common';

interface Empleado { // Definimos los types para utilizar en la clase. 
    id: number,
    nombre: string

}

@Injectable()
export class EmpleadosService {
    private empleados: Empleado[] = [ //Estamos creando un arry que es te tipo Empleados
        {id:1, nombre: 'Jose Carlos'},
        {id:2, nombre: 'Marco Jose'}, 
    ];
    
    findAll(): Empleado[] { // indicamos que esperamos un arrglo como rector de tipo Empleado
        return this.empleados; 
    }

    findOne(id: number): Empleado {

        const empleado = this.empleados.find(parametro => parametro.id === id );
        if (!empleado){
            throw new NotFoundException(`Empleado con id ${id} no encontrado`);
        } 
        return empleado;

    }

    


}
