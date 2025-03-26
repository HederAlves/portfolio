import { Module } from '@nestjs/common';
import { ProjectPrisma } from './projects.prisma';
import { ProjectController } from './projects.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [ProjectController],
  providers: [ProjectPrisma]
})
export class ProjectModule { }
