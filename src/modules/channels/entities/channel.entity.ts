import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('channels')
export class Channel {
    @PrimaryGeneratedColumn({
        type: "int",
        name: "id",
    })
    id!: number;

    @Column()
    name!:string

    @Column()
    admin!:number
}
