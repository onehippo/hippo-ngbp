import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

@Injectable()
export class UserService {

  possibleUserNames: Array<string>;

  constructor(private apiService: ApiService) {

    this.possibleUserNames = [
      'Ariel',
      'Arthur',
      'Joeri',
      'Mathijs',
      'Michiel',
      'Ran',
    ];
  }

  generateUser() {
    const userName = this.getRandomUserName();
    return this.apiService.getUser(userName);
  }

  getRandomUserName() {
    const maxIndex = this.possibleUserNames.length - 1;
    const randomIndex = Math.floor(Math.random() * maxIndex);
    return this.possibleUserNames.splice(randomIndex, 1)[0];
  }
}

