import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { EmpleadosService, Empleado}  from './empleados.service'; 
import { retry } from 'rxjs';
@Controller('empleados')
export class EmpleadosController {
    constructor(private readonly empleadosService:EmpleadosService){} // vamos a utilizar la instancia de el contendor de dependencias. indicamos que vamos a utilizar la instancia del inyectable. 

    @Get()
    getAll(): Empleado[]{

        return this.empleadosService.findAll(); 

    }

    @Get(':id') // Se ejecuta el metodo, cuando resivamos una url, que concuerde con la url y elemento mas. 
    getOne(@Param('id',ParseIntPipe) id: number){ // @Param, me ayuda a capturar el id que venia con el id de url. que campuro el get. 
        return this.empleadosService.findOne(id);
    }

}
