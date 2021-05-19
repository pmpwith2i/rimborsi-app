import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegaEditComponent } from './delega-edit.component';

describe('DelegaEditComponent', () => {
  let component: DelegaEditComponent;
  let fixture: ComponentFixture<DelegaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
