import { Module } from '@nestjs/common';
import { PrestamoController } from './prestamo.controller';
import { PrestamoService } from './prestamo.service';

@Module({
  controllers: [PrestamoController],
  providers: [PrestamoService]
})
export class PrestamoModule {}
