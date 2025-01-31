import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSkill } from './skill.dto';
import { Skill } from '@prisma/client';

@Injectable()
export class SkillService {
  constructor(private readonly prismaService: PrismaService) {}

  create({ name }: CreateSkill): Promise<Skill> {
    return this.prismaService.skill.create({ data: { name } });
  }
}
