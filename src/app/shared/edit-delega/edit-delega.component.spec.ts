import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDelegaComponent } from './edit-delega.component';

describe('EditDelegaComponent', () => {
  let component: EditDelegaComponent;
  let fixture: ComponentFixture<EditDelegaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDelegaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDelegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
