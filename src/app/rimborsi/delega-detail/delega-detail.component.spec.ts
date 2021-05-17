import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegaDetailComponent } from './delega-detail.component';

describe('DelegaDetailComponent', () => {
  let component: DelegaDetailComponent;
  let fixture: ComponentFixture<DelegaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
