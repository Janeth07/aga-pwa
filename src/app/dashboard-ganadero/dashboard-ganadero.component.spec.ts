import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGanaderoComponent } from './dashboard-ganadero.component';

describe('DashboardGanaderoComponent', () => {
  let component: DashboardGanaderoComponent;
  let fixture: ComponentFixture<DashboardGanaderoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGanaderoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGanaderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
