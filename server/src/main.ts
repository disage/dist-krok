import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module'
const start = async ()=>{
  try{
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    app.enableCors();
   await app.listen(PORT, ()=>{console.log(`server started on PORT ${PORT}`)})
  } catch (e) {
    console.log(e);
  }
}

start();















// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import {NestExpressApplication} from '@nestjs/platform-express'
// import * as path from "path";


// async function bootstrap() {
//   const app = await NestFactory.create<NestExpressApplication>(AppModule);
//   /*app.setBaseViewsDir(path.join(__dirname, 'views'))
//   app.set('view engine', 'js');
//   app.engine('js', require('express-react-views').createEngine())*/
//   await app.listen(3000);
// }
// bootstrap();
