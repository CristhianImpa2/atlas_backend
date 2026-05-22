import { Body, Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
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
    
    @Post() 
    Create(@Body() body:CreateEmpleadoDto): Empleado {
        retrun this.empleadosService.create(body); 
    }

    
    @Put(':id')// Cuando la ruta indique put, mas un parametro dinamico. 
    Update(// Ejeuctamos aqui. 
        @Parm('id', ParseIntPipe) id: number, // extrameos el id, de la ruta dinamica, lo hacemos un numero y decimos que es de tipo number. 
        @Body( ) body:Upadate, // Tomamos el body que es donde viene la actualizacion. 
    ): Empleado{ // Luego de resivir toda la ifo, y tiparla, hacemos la ejecucion el service pasando los respectivos parametros necesarios para el metodo update en el service. 

        return this.empleadosService.update(id, body);

    }

    
    
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number): void {
        return this.empleadosService.remove(id);
    }
}

    
    
    
        
}
