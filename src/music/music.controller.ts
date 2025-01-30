import { Controller, Get } from '@nestjs/common';
import { MusicService } from './music.service';

@Controller()
export class MusicController {
  constructor(private readonly appService: MusicService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
