import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllegatoItemComponent } from './allegato-item.component';

describe('AllegatoItemComponent', () => {
  let component: AllegatoItemComponent;
  let fixture: ComponentFixture<AllegatoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllegatoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllegatoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
