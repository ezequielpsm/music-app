import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { MusicService } from './music.service';
import { Music } from '@prisma/client';
import {
  CreateMusic,
  DeleteMusicParams,
  GetMusicParams,
  UpdateMusic,
  UpdateMusicParams,
} from './music.dto';
import { get } from 'http';

@Controller('api/music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Post()
  create(@Body() createMusic: CreateMusic): Promise<Music> {
    return this.musicService.create(createMusic);
  }

  @Put(':id')
  update(
    @Param() updateMusicParams: UpdateMusicParams,
    @Body() updateMusic: UpdateMusic,
  ): Promise<Music> {
    return this.musicService.update(updateMusicParams, updateMusic);
  }

  @Delete(':id')
  delete(@Param() deleteMusicParams: DeleteMusicParams): Promise<Music> {
    return this.musicService.delete(deleteMusicParams);
  }

  @Get()
  get(@Query() getMusicParams: GetMusicParams): Promise<Music[]> {
    return this.musicService.get(getMusicParams);
  }
}
