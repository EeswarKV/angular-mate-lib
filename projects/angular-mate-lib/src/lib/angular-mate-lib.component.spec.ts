import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMateLibComponent } from './angular-mate-lib.component';

describe('AngularMateLibComponent', () => {
  let component: AngularMateLibComponent;
  let fixture: ComponentFixture<AngularMateLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMateLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMateLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
