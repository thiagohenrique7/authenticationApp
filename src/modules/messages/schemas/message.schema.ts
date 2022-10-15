import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose'

export type MessageDocument = Message & Document

@Schema()
export class Message {
    @Prop({required:true})
    content!: string;

    @Prop()
    date?: string;

    @Prop({required:true})
    channel_destiny!: number

    @Prop({required:true})
    user_origin!: number

}

export const MessageSchema = SchemaFactory.createForClass(Message)
