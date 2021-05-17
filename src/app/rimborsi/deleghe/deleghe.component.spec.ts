import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegheComponent } from './deleghe.component';

describe('DelegheComponent', () => {
  let component: DelegheComponent;
  let fixture: ComponentFixture<DelegheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
