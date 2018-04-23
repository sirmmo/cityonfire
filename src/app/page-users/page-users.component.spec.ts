import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUsersComponent } from './page-users.component';

describe('PageUsersComponent', () => {
  let component: PageUsersComponent;
  let fixture: ComponentFixture<PageUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
