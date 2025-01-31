import { Body, Controller, Post } from '@nestjs/common';
import { SkillService } from './skill.service';
import { CreateSkill } from './skill.dto';
import { Skill } from '@prisma/client';

@Controller('api/skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Post()
  create(@Body() createSkill: CreateSkill): Promise<Skill> {
    return this.skillService.create(createSkill);
  }
}
