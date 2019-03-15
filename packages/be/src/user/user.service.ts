import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { SignInDto } from 'src/auth/dto/sign-in.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  create(userData: CreateUserDto): Promise<User> {
    const user = new User();

    user.name = userData.name;
    user.email = userData.email;
    user.password = userData.password;

    return this.userRepository.save(user);
  }

  findOneBy(signInDto: SignInDto): Promise<User> {
    return this.userRepository.findOne(signInDto);
  }

  findOne(id: string) {
    return this.userRepository.findOne(id);
  }
}
