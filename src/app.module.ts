import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './controllers/test/test.controller';
import { Test1Controller } from './controllers/test1/test1.controller';
import { Test2Controller } from './controllers/test2/test2.controller';
import { Test3Controller } from './controllers/test3/test3.controller';

@Module({
  imports: [],
  controllers: [AppController, TestController, Test1Controller, Test2Controller, Test3Controller],
  providers: [AppService],
})
export class AppModule {}
