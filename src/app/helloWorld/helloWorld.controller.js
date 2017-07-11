export default class HelloWorldController {
  constructor(MessageService) {
    'ngInject';

    this.MessageService = MessageService;
  }

  $onInit() {
    this.message = this.MessageService.message;
  }
}
