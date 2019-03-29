import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestlineDisplayComponent } from './requestline-display.component';

describe('RequestlineDisplayComponent', () => {
  let component: RequestlineDisplayComponent;
  let fixture: ComponentFixture<RequestlineDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestlineDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestlineDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
