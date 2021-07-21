import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaleListComponent } from './totale-list.component';

describe('TotaleListComponent', () => {
  let component: TotaleListComponent;
  let fixture: ComponentFixture<TotaleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotaleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
