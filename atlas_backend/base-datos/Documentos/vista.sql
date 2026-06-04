CREATE VIEW vista_documentos AS
SELECT 
  codigo,
  titulo,
  numero_hojas AS "Nro. hojas",
  tipo_documento_id AS "Tipo documento",
  estado
FROM documentos;