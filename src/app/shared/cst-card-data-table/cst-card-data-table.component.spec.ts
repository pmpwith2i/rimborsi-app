import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CstCardDataTableComponent } from './cst-card-data-table.component';

describe('CstCardDataTableComponent', () => {
  let component: CstCardDataTableComponent;
  let fixture: ComponentFixture<CstCardDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CstCardDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CstCardDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
