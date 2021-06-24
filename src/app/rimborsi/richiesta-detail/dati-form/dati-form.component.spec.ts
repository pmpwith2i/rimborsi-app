import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatiFormComponent } from './dati-form.component';

describe('DatiFormComponent', () => {
  let component: DatiFormComponent;
  let fixture: ComponentFixture<DatiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
