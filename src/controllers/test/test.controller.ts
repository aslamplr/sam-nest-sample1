import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../app.service';

@Controller('test')
export class TestController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTest(): string {
    return this.appService.getHello() + 'from test controller';
  }
}
