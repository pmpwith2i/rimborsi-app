import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetribuzioneListComponent } from './retribuzione-list.component';

describe('RetribuzioneListComponent', () => {
  let component: RetribuzioneListComponent;
  let fixture: ComponentFixture<RetribuzioneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetribuzioneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetribuzioneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
