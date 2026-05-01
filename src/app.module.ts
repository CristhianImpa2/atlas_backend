import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TipoDocumentoModule } from './modules/tipo-documento/tipo-documento.module';

@Module({
  imports: [TipoDocumentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
