'use strict';

export default class MainCtrl {
  constructor (MainService) {
    this.message = MainService.message;
  }
}

MainCtrl.$inject = ['MainService'];