import {AppServerModule} from '../src/main.server';
import {ShopEmailService} from './shop/mailing/shop-email.service';
import {Module} from "@nestjs/common";
import {AngularUniversalModule} from "@nestjs/ng-universal";
import {TypeOrmModule} from "@nestjs/typeorm";
import {join} from "path";

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/ng-test-new/browser')
    }),
    TypeOrmModule.forRoot({
      keepConnectionAlive: true,
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'hdacademy',
      logging: false,
      entities: [],
      synchronize: true,
    }),
  ],
  providers: [ShopEmailService]
})
export class AppModule {
}
