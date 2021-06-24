import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichiestaNewComponent } from './richiesta-new.component';

describe('RichiestaNewComponent', () => {
  let component: RichiestaNewComponent;
  let fixture: ComponentFixture<RichiestaNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichiestaNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichiestaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
