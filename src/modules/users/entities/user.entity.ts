import {Entity,Column, PrimaryGeneratedColumn} from "typeorm"

@Entity("users")
export class User{
    @PrimaryGeneratedColumn({
        type: "int",
        name: "id",
    })
    id!: number;

    @Column({length: 100})
    email!: string;

    @Column({length: 100})
    password!: string

    @Column({length: 55})
    username!: string;

    @Column({length: 55})
    last_connection!: string;

    @Column({length: 255, nullable: true})
    biography!: string

    @Column({length: 45, nullable: true})
    phone!: string

    @Column({nullable: true})
    is_premium: number;
}