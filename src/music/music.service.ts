import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Music } from '@prisma/client';
import { CreateMusic } from './music.dto';

@Injectable()
export class MusicService {
  constructor(private readonly prismaService: PrismaService) {}
  create({ author, name }: CreateMusic): Promise<Music> {
    return this.prismaService.music.create({ data: { name, author } });
  }
}
