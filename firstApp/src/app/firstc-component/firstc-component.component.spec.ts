import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstcComponentComponent } from './firstc-component.component';

describe('FirstcComponentComponent', () => {
  let component: FirstcComponentComponent;
  let fixture: ComponentFixture<FirstcComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstcComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstcComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
