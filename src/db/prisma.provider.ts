import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
// Estender PrismaClient para que possamos injetá-lo em outros módulos/serviços, 
// e acessar suas propriedades e métodos diretamente
export class PrismaProvider extends PrismaClient { }
