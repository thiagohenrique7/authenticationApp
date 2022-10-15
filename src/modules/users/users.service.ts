import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
//ENTIDADE QUE MODELA OS DADOS -> REPOSITORIO QUE FAZ AS OPERAÇÕES COM ESSA ENTIDADE NO BANCO (CRUD)
@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private repository: Repository <User>) {}

  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto)
    const user = this.repository.create({
      email: createUserDto.email,
      password: createUserDto.password,
      username: createUserDto.username,
      last_connection: new Date().toLocaleDateString(),
      is_premium:0
    });
    console.log(createUserDto)
    console.log(user)
    
    let alreadyExists  = await this.findByUserNameOrEmail(user.username, user.email)
    if (alreadyExists){
      return { 
        created: false,
        data: "Usuario ou Email já cadastrados"}
    }else{
      await this.repository.insert(user);
      return {
        created: true,
        data: user};
    }
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({id})
  }
  async authetication(loginUser: LoginUserDto) {
    let password = loginUser.password
    let user!: CreateUserDto
    let loginByEmail = loginUser.login.includes(".com") && loginUser.login.includes("@")
    if (loginByEmail){
      let email = loginUser.login
      user = await this.repository.findOneBy({ email: email, password:password })
    }else{
      let username = loginUser.login
      user = await this.repository.findOneBy({ username: username, password:password })
    }
    if (user != null){
      user.last_connection = new Date().toLocaleDateString()
      this.repository.save(user)
    }
    return user;

  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let userToUpdate!: UpdateUserDto
    userToUpdate = await this.repository.findOneBy({id: id})
    userToUpdate.biography = updateUserDto.biography
    userToUpdate.phone = updateUserDto.phone
    console.log(updateUserDto)
    if (updateUserDto.email){
      userToUpdate.email = updateUserDto.email
    }
    if (updateUserDto.password){
      userToUpdate.password = updateUserDto.password
    }
    console.log(userToUpdate)
    this.repository.save(userToUpdate)

    return userToUpdate;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async findByUserNameOrEmail(username: string, email:string){
    const userByUsername = await this.repository.findBy({username})
    const userByEmail = await this.repository.findBy({email})
    if (userByEmail.length>0 || userByUsername.length>0){
      return true
    }else{
      return false;

    }
    
  }
}
