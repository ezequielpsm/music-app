import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Music } from '@prisma/client';
import {
  CreateMusic,
  DeleteMusicParams,
  GetMusicParams,
  UpdateMusic,
  UpdateMusicParams,
} from './music.dto';

@Injectable()
export class MusicService {
  constructor(private readonly prismaService: PrismaService) {}
  create({ author, name }: CreateMusic): Promise<Music> {
    return this.prismaService.music.create({ data: { name, author } });
  }

  update(
    { id }: UpdateMusicParams,
    { author, name }: UpdateMusic,
  ): Promise<Music> {
    return this.prismaService.music.update({
      data: { name, author },
      where: { id },
    });
  }

  delete({ id }: DeleteMusicParams): Promise<Music> {
    return this.prismaService.music.delete({ where: { id } });
  }

  get({ author, name }: GetMusicParams): Promise<Music[]> {
    return this.prismaService.music.findMany({ where: { author, name } });
  }
}
