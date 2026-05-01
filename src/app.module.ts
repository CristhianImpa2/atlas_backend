import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DependenciasModule } from './dependencias/dependencias.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { DocumentosModule } from './documentos/documentos.module';
import { ExpedienteModule } from './expediente/expediente.module';
import { PrestamoModule } from './prestamo/prestamo.module';
import { RetencionDocumentoModule } from './retencion-documento/retencion-documento.module';
import { SolicitudPrestamoModule } from './solicitud-prestamo/solicitud-prestamo.module';
import { TipoDocumentoModule } from './tipo-documento/tipo-documento.module';

@Module({
  imports: [DependenciasModule, EmpleadosModule, DocumentosModule, ExpedienteModule, PrestamoModule, RetencionDocumentoModule, SolicitudPrestamoModule, TipoDocumentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
