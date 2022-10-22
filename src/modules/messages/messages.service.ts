import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message, MessageDocument } from './schemas/message.schema';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel('Message')
    private readonly messageModel: Model <MessageDocument>) {}
  create(createMessageDto: CreateMessageDto) {
    console.log(createMessageDto)
    const newMessage = new this.messageModel(createMessageDto)
    return newMessage.save();
  }

  findAll() {
    return this.messageModel.find();
  }

  findByMessage(word: string) {
    return this.messageModel.findOne({content: word});
  }
  
  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
