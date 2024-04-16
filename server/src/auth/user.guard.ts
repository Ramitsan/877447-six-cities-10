import {
  CanActivate,
  ExecutionContext,
  Injectable
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { Request } from 'express';
import { users } from '../data/users';


@Injectable()
export class UserGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      return true;
    }
    try {
      const payload = await this.jwtService.verifyAsync(
        token,
        {
          secret: jwtConstants.secret
        }
      );
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      const userData = users.find(it => it.id == payload.id);
      if(!userData) {
        return true;
      }
      request['user'] = userData;
    } catch {
      return true;
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    console.log(request.headers);
    // const [type, token] = (request.headers['x-token'] as string)?.split(' ') ?? [];
    // return type === 'Bearer' ? token : undefined;
    return request.headers['x-token'] as string;
  }
}