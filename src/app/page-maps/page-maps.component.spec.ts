import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMapsComponent } from './page-maps.component';

describe('PageMapsComponent', () => {
  let component: PageMapsComponent;
  let fixture: ComponentFixture<PageMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
