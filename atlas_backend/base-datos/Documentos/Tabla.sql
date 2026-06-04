CREATE TABLE documentos (
  id SMALLINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  codigo VARCHAR(10) NOT NULL,
  titulo VARCHAR(10) NOT NULL,
  numero_hojas VARCHAR(45) NOT NULL,
  ubicacion DECIMAL(10,2) NOT NULL,
  version VARCHAR(10) NOT NULL,
  fecha_creacion VARCHAR(10) NOT NULL,
  tipo_documento_id SMALLINT NOT NULL,
  estado VARCHAR(10) NOT NULL DEFAULT 'Activo'
);