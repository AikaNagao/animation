import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunobjComponent } from './sunobj.component';

describe('SunobjComponent', () => {
  let component: SunobjComponent;
  let fixture: ComponentFixture<SunobjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunobjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunobjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
