import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbanPanelComponent } from './iban-panel.component';

describe('IbanPanelComponent', () => {
  let component: IbanPanelComponent;
  let fixture: ComponentFixture<IbanPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbanPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbanPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
