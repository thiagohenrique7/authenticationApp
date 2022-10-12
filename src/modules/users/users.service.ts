import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
//ENTIDADE QUE MODELA OS DADOS -> REPOSITORIO QUE FAZ AS OPERAÇÕES COM ESSA ENTIDADE NO BANCO (CRUD)
@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private repository: Repository <User>) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.repository.create({
      email: createUserDto.email,
      password: createUserDto.password,
      username: createUserDto.username,
      last_connection: new Date().toLocaleDateString(),
      is_premium:0
    });
    
    let alreadyExists  = await this.findByUserName(user.username)
    if (alreadyExists.length > 0){
      return { data: "Nome de Usuário ja existe"}
    }else{
      await this.repository.insert(user);
      return {data: user};
    }
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({id})
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findByUserName(username: string){
    const userByUsername = await this.repository.findBy({username})
    return userByUsername;
    
  }
}
