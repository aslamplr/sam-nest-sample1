import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../app.service';

@Controller('test2')
export class Test2Controller {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTest(): string {
    return this.appService.getHello() + 'from test2 controller';
  }
}
