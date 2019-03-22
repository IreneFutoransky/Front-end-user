import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRequestEditComponent } from './request-request-edit.component';

describe('RequestRequestEditComponent', () => {
  let component: RequestRequestEditComponent;
  let fixture: ComponentFixture<RequestRequestEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestRequestEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestRequestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
