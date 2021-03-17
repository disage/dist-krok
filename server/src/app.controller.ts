import {Controller, Get, Render} from '@nestjs/common';

@Controller('/')
export class AppController {
  @Get(['', 'post', 'post/*', 'update/*', 'posts', 'create', 'admin'])
  //@Render('layout')
  pages() {

  }
}
