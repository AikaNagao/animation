import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainobjComponent } from './rainobj.component';

describe('RainobjComponent', () => {
  let component: RainobjComponent;
  let fixture: ComponentFixture<RainobjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainobjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainobjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
