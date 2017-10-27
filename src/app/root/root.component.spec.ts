import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootComponent } from './root.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UsersModule } from './users/users.module';
import { MaterialModule } from '../material/material.module';
import { ToolbarService } from './toolbar/toolbar.service';

describe('Hippo app component', () => {

  let component: RootComponent;
  let fixture: ComponentFixture<RootComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        UsersModule
      ],
      declarations: [
        RootComponent,
        ToolbarComponent
      ],
      providers: [
        ToolbarService,
      ]
    });

    fixture = TestBed.createComponent(RootComponent);
    component = fixture.componentInstance;
  });

  it('should initialize', () => {
    component.ngOnInit();
    expect(component.appName).toBe('app');
  });
});
