import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
// import {Response, Request} from 'express'
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body(new ValidationPipe({transform: true})) createUserDto: CreateUserDto) { //Data transfer object
    console.log("CHEGANDO")
    console.log("AQUI",createUserDto)
    return this.usersService.create(createUserDto);
  }

  @Post('login')
  async autheticationUser(@Body() loginUser: LoginUserDto ){
    let auth =  await this.usersService.authetication(loginUser)
    if (auth == null){
      return { 
        login: false,
        data: "Usuário ou senha inválidos" }
    }else{
      return{
        login:true,
        data: auth}
    }
  }

  // @Get()
  // async findAll(@Req() request: Request, @Res() response: Response) {
  //   console.log("GET")
  //   console.log()
  //   const users = await this.usersService.findAll();
  //   console.log(users)
  //   return response.send(users)
  // }

  @Get()
  findAll() {
    console.log("GET")
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(+id);
  }
}
