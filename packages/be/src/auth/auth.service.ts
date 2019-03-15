import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(payload: JwtPayload): Promise<User> {
    return await this.userService.findOne(payload.id);
  }

  async signIn(signInDto: SignInDto): Promise<string> {
    const user: User = await this.userService.findOneBy(signInDto);

    const { id, email, name } = user;

    const jwtPayload: JwtPayload = {
      id,
      email,
      name,
    };

    return this.jwtService.sign(jwtPayload);
  }
}
