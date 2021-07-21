import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichiestaDetailComponent } from './richiesta-detail.component';

describe('RichiestaDetailComponent', () => {
  let component: RichiestaDetailComponent;
  let fixture: ComponentFixture<RichiestaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichiestaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichiestaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
