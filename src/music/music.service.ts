import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MusicService {
  constructor(private readonly prismaService: PrismaService) {}
  getHello(): any {
    return this.prismaService.music.create({ data: { name: 'Os anjos te louvam', author: 'Eli Soares' } });
  }
}
