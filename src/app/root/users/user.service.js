export default class UserService {
  constructor(ApiService) {
    'ngInject';

    this.ApiService = ApiService;

    this.possibleUserNames = [
      'Anthony',
      'Arttyy',
      'Calsio',
      'Cliford',
      'Duane',
      'Emile',
      'Emma',
      'Francis',
      'Ingmar',
      'Joeri',
      'Lydia',
    ];
  }

  generateUser() {
    const userName = this.getRandomUserName();
    return this.ApiService.getUser(userName);
  }

  getRandomUserName() {
    const maxIndex = this.possibleUserNames.length - 1;
    const randomIndex = Math.floor(Math.random() * maxIndex);
    return this.possibleUserNames.splice(randomIndex, 1)[0];
  }
}
