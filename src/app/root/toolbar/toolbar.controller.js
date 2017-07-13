export default class ToolbarController {
  constructor(ToolbarService) {
    'ngInject';

    this.ToolbarService = ToolbarService;
  }

  $onInit() {
    this.message = this.ToolbarService.toolbarMessage;
  }
}
