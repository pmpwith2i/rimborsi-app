import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichiestaResumeComponent } from './richiesta-resume.component';

describe('RichiestaResumeComponent', () => {
  let component: RichiestaResumeComponent;
  let fixture: ComponentFixture<RichiestaResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichiestaResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichiestaResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
