import { Injectable } from '@nestjs/common';
import { users } from '../data/users';
import { JwtService } from '@nestjs/jwt';
import { UserDataType } from '../../../project/src/types/user-data';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(   
    private jwtService: JwtService
  ) {}

  async signIn(
    username: string,
    pass: string,
  ) {
    let user = await users.find((it) => it.email == username && it.password == pass);

    if(!user) {
      const name = username.split('').find(it => it == '@') ? username.split('@')[0] : username;
      const newUser = {
        id: Date.now(),
        isPro: false,
        name: name || username,
        avatarUrl: `/static/avatar/${Math.floor(Math.random() * 9) + 1}.jpg`, 
        email: username, 
        password: pass
      }
      users.push(newUser);
      user = newUser;
    }
    const payload = { id: user.id, email: user.email, name: user.name };
    const result: UserDataType = {
      id: user.id,
      email: user.email,
      token: await this.jwtService.signAsync(payload, {secret: jwtConstants.secret})
    } 
    return result;
  }
}