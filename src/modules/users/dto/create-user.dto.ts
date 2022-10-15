export class CreateUserDto {
    biography?: string
    phone?: string
    is_premium?: number
    email!: string;
    username!: string
    password!: string
    last_connection?: string
}
