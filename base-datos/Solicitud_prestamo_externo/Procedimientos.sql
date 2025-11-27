--insertar
DELIMITER //

CREATE PROCEDURE insertar_solicitud_externa (
  IN id_solicitud_prestamo_externa INT,
  IN fecha_registro DATETIME,
  IN organizacion VARCHAR(150),
  IN dependencia VARCHAR(45),
  IN apellidos_consultor VARCHAR(45),
  IN nombres_consultor VARCHAR(45),
  IN cargo_consultor VARCHAR(45),
  IN cedula VARCHAR(45),
  IN email VARCHAR(20),
  IN telefono VARCHAR(45),
  IN tipo_solicitante VARCHAR(45),
  IN fecha_consulta VARCHAR(45),
  IN hora_consulta VARCHAR(45),
  IN estado VARCHAR(15),
  IN prestamos_id INT
)
BEGIN
  INSERT INTO solicitud_prestamo_externa (
    id_solicitud_prestamo_externa, fecha_registro, organizacion, dependencia,
    apellidos_consultor, nombres_consultor, cargo_consultor, cedula, email,
    telefono, tipo_solicitante, fecha_consulta, hora_consulta, estado, prestamos_id
  ) VALUES (
    id_solicitud_prestamo_externa, fecha_registro, organizacion, dependencia,
    apellidos_consultor, nombres_consultor, cargo_consultor, cedula, email,
    telefono, tipo_solicitante, fecha_consulta, hora_consulta, estado, prestamos_id
  );
END //

DELIMITER ;

--actualizar
DELIMITER //

CREATE PROCEDURE actualizar_solicitud_externa (
  IN id_solicitud_prestamo_externa INT,
  IN fecha_registro DATETIME,
  IN organizacion VARCHAR(150),
  IN dependencia VARCHAR(45),
  IN apellidos_consultor VARCHAR(45),
  IN nombres_consultor VARCHAR(45),
  IN cargo_consultor VARCHAR(45),
  IN cedula VARCHAR(45),
  IN email VARCHAR(20),
  IN telefono VARCHAR(45),
  IN tipo_solicitante VARCHAR(45),
  IN fecha_consulta VARCHAR(45),
  IN hora_consulta VARCHAR(45),
  IN estado VARCHAR(15),
  IN prestamos_id INT
)
BEGIN
  UPDATE solicitud_prestamo_externa
  SET
    fecha_registro = fecha_registro,
    organizacion = organizacion,
    dependencia = dependencia,
    apellidos_consultor = apellidos_consultor,
    nombres_consultor = nombres_consultor,
    cargo_consultor = cargo_consultor,
    cedula = cedula,
    email = email,
    telefono = telefono,
    tipo_solicitante = tipo_solicitante,
    fecha_consulta = fecha_consulta,
    hora_consulta = hora_consulta,
    estado = estado,
    prestamos_id = prestamos_id
  WHERE id_solicitud_prestamo_externa = id_solicitud_prestamo_externa;
END //

DELIMITER ;

--eliminar
DELIMITER //

CREATE PROCEDURE eliminar_solicitud_externa (
  IN id_solicitud_prestamo_externa INT
)
BEGIN
  UPDATE solicitud_prestamo_externa
  SET estado = 'Inactivo'
  WHERE id_solicitud_prestamo_externa = id_solicitud_prestamo_externa;
END //

DELIMITER ;