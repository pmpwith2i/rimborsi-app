import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CstFilterSectionComponent } from './cst-filter-section.component';

describe('CstFilterSectionComponent', () => {
  let component: CstFilterSectionComponent;
  let fixture: ComponentFixture<CstFilterSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CstFilterSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CstFilterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
