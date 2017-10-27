import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../types/user';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiService {

  getUser (name): Observable<User> {
    return Observable.of({
      name,
      description: `Hi I'm ${name}`,
    });
  }
}
