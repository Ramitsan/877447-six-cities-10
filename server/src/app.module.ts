import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserGuard } from './auth/user.guard';
@Module({
  imports: [JwtModule,  ServeStaticModule.forRoot({   
    rootPath: join(__dirname, '../../../src/data/static'),
    serveRoot: '/static/'
  }),],
  controllers: [AppController],
  providers: [AppService, AuthService, AuthGuard, UserGuard],
})
export class AppModule {}
