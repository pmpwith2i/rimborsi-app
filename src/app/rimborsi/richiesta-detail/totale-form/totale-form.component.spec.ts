import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaleFormComponent } from './totale-form.component';

describe('TotaleFormComponent', () => {
  let component: TotaleFormComponent;
  let fixture: ComponentFixture<TotaleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotaleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotaleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
