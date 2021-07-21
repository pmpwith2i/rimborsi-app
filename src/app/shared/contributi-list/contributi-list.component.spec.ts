import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributiListComponent } from './contributi-list.component';

describe('ContributiListComponent', () => {
  let component: ContributiListComponent;
  let fixture: ComponentFixture<ContributiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
