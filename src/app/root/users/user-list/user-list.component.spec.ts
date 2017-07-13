import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';

xdescribe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  const users = [
    {
      name: 'Joeri',
      description: 'Awesome web engineer',
    },
    {
      name: 'Stijn',
      description: 'Awesome python programmer',
    },
    {
      name: 'Ger',
      description: 'Awesome web developer',
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component.users).toEqual(users);
  });
});
