import { Module } from '@nestjs/common';
import { MusicController } from './music/music.controller';
import { MusicService } from './music/music.service';
import { PrismaService } from './prisma/prisma.service';
import { SkillController } from './skill/skill.controller';
import { SkillService } from './skill/skill.service';

@Module({
  imports: [],
  controllers: [MusicController, SkillController],
  providers: [MusicService, PrismaService, SkillService],
})
export class AppModule {}
