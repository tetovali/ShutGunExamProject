import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GivenPointsComponent } from './given-points.component';

describe('GivenPointsComponent', () => {
  let component: GivenPointsComponent;
  let fixture: ComponentFixture<GivenPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivenPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivenPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
