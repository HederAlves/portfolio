import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { ProjectModule } from './projects/projects.module';
import { TechnologyModule } from './technologies/technologies.module';

@Module({
  imports: [DbModule, ProjectModule, TechnologyModule,],
  controllers: [AppController,]
})
export class AppModule { }
