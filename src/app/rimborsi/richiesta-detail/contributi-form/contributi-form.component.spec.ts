import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributiFormComponent } from './contributi-form.component';

describe('ContributiFormComponent', () => {
  let component: ContributiFormComponent;
  let fixture: ComponentFixture<ContributiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
