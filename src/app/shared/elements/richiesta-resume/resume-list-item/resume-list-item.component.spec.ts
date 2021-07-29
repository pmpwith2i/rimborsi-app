import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeListItemComponent } from './resume-list-item.component';

describe('ResumeListItemComponent', () => {
  let component: ResumeListItemComponent;
  let fixture: ComponentFixture<ResumeListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
