import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiornataItemComponent } from './giornata-item.component';

describe('GiornataItemComponent', () => {
  let component: GiornataItemComponent;
  let fixture: ComponentFixture<GiornataItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiornataItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiornataItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
