import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CstPanelCardComponent } from './cst-panel-card.component';

describe('CstPanelCardComponent', () => {
  let component: CstPanelCardComponent;
  let fixture: ComponentFixture<CstPanelCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CstPanelCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CstPanelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
