import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstruttoreComponent } from './istruttore.component';

describe('IstruttoreComponent', () => {
  let component: IstruttoreComponent;
  let fixture: ComponentFixture<IstruttoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstruttoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstruttoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
