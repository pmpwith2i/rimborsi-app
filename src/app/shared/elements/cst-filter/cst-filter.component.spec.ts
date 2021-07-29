import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CstFilterComponent } from './cst-filter.component';

describe('CstFilterComponent', () => {
  let component: CstFilterComponent;
  let fixture: ComponentFixture<CstFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CstFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CstFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
