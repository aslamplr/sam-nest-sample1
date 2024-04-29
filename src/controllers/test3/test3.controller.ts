import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../app.service';

@Controller('test3')
export class Test3Controller {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTest(): string {
    return this.appService.getHello() + 'from test3 controller';
  }
}
