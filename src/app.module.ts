import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/users/entities/user.entity';
// import { UserController } from './modules/users/user.controller';
// import { UserService } from './modules/users/user.service';
// import { UsersModule } from './modules/users/users.module';
import { UsersModule } from './modules/users/users.module';

@Module({ //ES7 DECORATORS
  imports: [UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'santoss710',
      database: 'authapi',
      entities: [User],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
