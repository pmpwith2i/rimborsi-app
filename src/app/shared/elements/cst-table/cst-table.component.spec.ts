import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CstTableComponent } from './cst-table.component';

describe('CstTableComponent', () => {
  let component: CstTableComponent;
  let fixture: ComponentFixture<CstTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CstTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CstTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
