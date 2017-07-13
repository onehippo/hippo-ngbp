import { Directive, ElementRef, Injector, SimpleChanges } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'hippo-list-button'
})
export class ListButtonComponent extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('hippoListButton', elementRef, injector);
  }
}

