import { Body, Controller, Get, Post } from '@nestjs/common';
import { MusicService } from './music.service';
import { Music } from '@prisma/client';
import { CreateMusic } from './music.dto';

@Controller('api/music')
export class MusicController {
  constructor(private readonly appService: MusicService) {}

  @Post()
  create(@Body() createMusic: CreateMusic): Promise<Music> {
    return this.appService.create(createMusic);
  }
}
