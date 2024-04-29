import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../../app.service';

@Controller('test')
export class TestController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTest(): string {
    return this.appService.getHello() + 'from test controller';
  }

  @Get('sample')
  getSample(): string {
    return 'sample from test controller';
  }

  @Post('sample')
  postSample(): string {
    return 'response from post sample in test controller';
  }
}
