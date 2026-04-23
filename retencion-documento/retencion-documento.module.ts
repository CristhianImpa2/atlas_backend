import { Module } from '@nestjs/common';
import { RetencionDocumentoController } from './retencion-documento.controller';
import { RetencionDocumentoService } from './retencion-documento.service';

@Module({
  controllers: [RetencionDocumentoController],
  providers: [RetencionDocumentoService]
})
export class RetencionDocumentoModule {}
