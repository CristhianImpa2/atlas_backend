
CREATE TABLE solicitud_prestamo_externa (
  id_solicitud_prestamo_externa INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  fecha_registro DATETIME(0) NOT NULL,                                   
  organizacion VARCHAR(150) NOT NULL,                                    
  dependencia VARCHAR(45) NOT NULL,                                      
  apellidos_consultor VARCHAR(45) NOT NULL,                              
  nombres_consultor VARCHAR(45) NOT NULL,                                
  cargo_consultor VARCHAR(45) NOT NULL,                                  
  cedula VARCHAR(45) NOT NULL,                                           
  email VARCHAR(20) NOT NULL,                                            
  telefono VARCHAR(45) NOT NULL,                                         
  tipo_solicitante VARCHAR(45) NOT NULL,                                 
  fecha_consulta VARCHAR(45) NOT NULL,                                   
  hora_consulta VARCHAR(45) NOT NULL,                                    
  estado VARCHAR(15) NOT NULL,                                           
  prestamos_id INT                                                       
);