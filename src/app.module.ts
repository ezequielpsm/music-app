import { Module } from '@nestjs/common';
import { MusicController } from './music/music.controller';
import { MusicService } from './music/music.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [MusicController],
  providers: [MusicService, PrismaService],
})
export class AppModule {}
