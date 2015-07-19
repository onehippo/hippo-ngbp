export class MainCtrl {
  //@ngInject
  constructor (MainService) {
    this.message = MainService.message;
  }
}

