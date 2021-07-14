import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichiesteItemComponent } from './richieste-item.component';

describe('RichiesteItemComponent', () => {
  let component: RichiesteItemComponent;
  let fixture: ComponentFixture<RichiesteItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichiesteItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichiesteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
