import { Injectable } from '@nestjs/common';
import { deleghe } from './model';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getDeleghe(): any {
    return deleghe;
  }
}
