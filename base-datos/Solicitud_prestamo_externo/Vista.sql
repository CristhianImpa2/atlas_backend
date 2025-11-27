CREATE VIEW vista_solicitudes_externas AS
SELECT
  id_solicitud_prestamo_externa AS Id,
  CONCAT(nombres_consultor, ' ', apellidos_consultor) AS Solicitante,
  organizacion AS Organización,
  fecha_registro AS Fecha,
  estado AS Estado
FROM solicitud_prestamo_externa;