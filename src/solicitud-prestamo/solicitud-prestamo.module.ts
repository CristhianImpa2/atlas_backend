import { Module } from '@nestjs/common';
import { SolicitudPrestamoController } from './solicitud-prestamo.controller';
import { SolicitudPrestamoService } from './solicitud-prestamo.service';

@Module({
  controllers: [SolicitudPrestamoController],
  providers: [SolicitudPrestamoService]
})
export class SolicitudPrestamoModule {}
