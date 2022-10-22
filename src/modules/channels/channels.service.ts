import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { Channel } from './entities/channel.entity';

@Injectable()
export class ChannelsService {
  constructor(
  @InjectRepository(Channel)
  private repository: Repository <Channel>) {}

  create(createChannelDto: CreateChannelDto) {
    return this.repository.create({
      name:createChannelDto.name,
      admin:createChannelDto.admin
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findBy({id:id});
  }

  update(id: number, updateChannelDto: UpdateChannelDto) {
    return `This action updates a #${id} channel`;
  }

  remove(id: number) {
    return this.repository.delete(id)
  }
}
