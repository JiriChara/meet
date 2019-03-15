import { Controller, Post, Body } from '@nestjs/common';

import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { JwtResponse } from './interfaces/jwt-response.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async signIn(@Body() signInDto: SignInDto): Promise<JwtResponse> {
    const jwtResponse: JwtResponse = {
      jwt: await this.authService.signIn(signInDto),
    };

    return jwtResponse;
  }
}
