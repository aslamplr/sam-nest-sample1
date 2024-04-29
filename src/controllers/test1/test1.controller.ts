import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../app.service';

@Controller('test1')
export class Test1Controller {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTest(): string {
    return this.appService.getHello() + 'from test1 controller';
  }
}
