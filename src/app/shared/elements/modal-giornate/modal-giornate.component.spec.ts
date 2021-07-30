import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGiornateComponent } from './modal-giornate.component';

describe('ModalGiornateComponent', () => {
  let component: ModalGiornateComponent;
  let fixture: ComponentFixture<ModalGiornateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalGiornateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGiornateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
