-- Procedimiento insertar documento
DELIMITER //

CREATE PROCEDURE insertar_documento (
    IN codigo VARCHAR(10),
    IN titulo VARCHAR(45),
    IN numero_hojas VARCHAR(45),
    IN ubicacion DECIMAL(10,2),
    IN version VARCHAR(10),
    IN fecha_creacion VARCHAR(10),
    IN tipo_documento_id SMALLINT,
    IN estado VARCHAR(10)
)
BEGIN
    INSERT INTO documentos (
        codigo, titulo, numero_hojas, ubicacion, version, fecha_creacion, tipo_documento_id, estado
    ) VALUES (
        codigo, titulo, numero_hojas, ubicacion, version, fecha_creacion, tipo_documento_id, estado
    );
END //

DELIMITER ;

-- Procedimiento actualizar documento
DELIMITER //    
CREATE PROCEDURE actualizar_documento (
    IN id SMALLINT,
    IN codigo VARCHAR(10),
    IN titulo VARCHAR(45),
    IN numero_hojas VARCHAR(45),
    IN ubicacion DECIMAL(10,2),
    IN version VARCHAR(10),
    IN fecha_creacion VARCHAR(10),
    IN tipo_documento_id SMALLINT,
    IN estado VARCHAR(10)
)

BEGIN
    UPDATE documentos
    SET 
        codigo = codigo,
        titulo = titulo,
        numero_hojas = numero_hojas,
        ubicacion = ubicacion,
        version = version,
        fecha_creacion = fecha_creacion,
        tipo_documento_id = tipo_documento_id,
        estado = estado
    WHERE id = id;
END //
DELIMITER ;

-- Procedimiento eliminar documento logico
DELIMITER //
CREATE PROCEDURE eliminar_documento (
  IN p_id SMALLINT
)
BEGIN
  UPDATE documentos
  SET estado = 'Inactivo'
  WHERE id = p_id;
END;
//
DELIMITER ;

