import{PartialType} from '@nestjs/mapped-types';
import{CreateEmpleadoDto} from './create-empleado.dto'; 


export class UpdateEmpleadoDto extends PartialType(CreateEmpleadoDto) {}

//Hereadaos de la clase CreateEmpleadoDto, pero hacemos que todos los campos no sean obligatiorios. 
//Osea creamos una clase nueva, heredada de CreateEmpleado excatamente igual, pero sin que sea obligatorio rellenar todos
//los campos, PartialType, es la que se encarga de tomar la clase heredada, y hacerle opcinal los campos. 


