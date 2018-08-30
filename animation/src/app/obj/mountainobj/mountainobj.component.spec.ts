import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainobjComponent } from './mountainobj.component';

describe('MountainobjComponent', () => {
  let component: MountainobjComponent;
  let fixture: ComponentFixture<MountainobjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountainobjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MountainobjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
