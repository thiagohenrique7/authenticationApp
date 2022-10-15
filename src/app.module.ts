import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/users/entities/user.entity';
import { UsersModule } from './modules/users/users.module';
import { ChannelsModule } from './modules/channels/channels.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesModule } from './modules/messages/messages.module';

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
    MongooseModule.forRoot('mongodb+srv://root:pingolasdev@apicluster.ohe3fbc.mongodb.net/messagesApiAuth?retryWrites=true&w=majority'),
    ChannelsModule,
    MessagesModule,
  ],
  // mongodb+srv://root:pingolasdev@apicluster.ohe3fbc.mongodb.net/messagesApiAuth?retryWrites=true&w=majority
  controllers: [],
  providers: [],
})
export class AppModule {}
