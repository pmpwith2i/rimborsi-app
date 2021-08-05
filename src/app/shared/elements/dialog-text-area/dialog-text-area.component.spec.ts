import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTextAreaComponent } from './dialog-text-area.component';

describe('DialogTextAreaComponent', () => {
  let component: DialogTextAreaComponent;
  let fixture: ComponentFixture<DialogTextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTextAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
