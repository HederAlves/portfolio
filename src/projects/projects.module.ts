import { Module } from '@nestjs/common';
import { ProjectPrisma } from './projects.prisma';
import { DbModule } from 'src/db/db.module';
import { ProjectController } from './projects.controller';

@Module({
  imports: [DbModule],
  controllers: [ProjectController],
  providers: [ProjectPrisma]
})
export class ProjectModule { }
