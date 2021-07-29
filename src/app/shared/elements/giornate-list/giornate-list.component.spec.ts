import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiornateListComponent } from './giornate-list.component';

describe('GiornateListComponent', () => {
  let component: GiornateListComponent;
  let fixture: ComponentFixture<GiornateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiornateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiornateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
