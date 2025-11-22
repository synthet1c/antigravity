import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): { message: string } {
    return {
      message: this.appService.getHello(),
    }
  }

  @Get('hello')
  getHello2(@Query('who') who: string): { message: string } {
    return {
      message: this.appService.getHello() + ' ' + who
    }
  }


  @Get('sup/:who')
  sup(@Param('who') who: string): { message: string } {
    return {
      message: this.appService.getHello() + ' ' + who
    };
  }
}
