import {Entity,Column, PrimaryGeneratedColumn} from "typeorm"

@Entity("users")
export class User{
    @PrimaryGeneratedColumn({
        type: "int",
        name: "id",
    })
    id!: number;

    @Column({length: 255})
    email!: string;

    @Column({length: 255})
    password!: string;

    @Column({length: 255})
    username!: string;

    @Column({length: 255})
    last_connection!: string;

    @Column()
    is_premium!: number;
}