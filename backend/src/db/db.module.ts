import { Module } from '@nestjs/common';
import { PrismaProvider } from './prisma.provider';

@Module({
  providers: [PrismaProvider],
  // Exportar PrismaProvider para que outros módulos possam usá-lo
  exports: [PrismaProvider],
})
export class DbModule { }
