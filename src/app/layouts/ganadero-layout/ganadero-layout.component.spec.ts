import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanaderoLayoutComponent } from './ganadero-layout.component';

describe('GanaderoLayoutComponent', () => {
  let component: GanaderoLayoutComponent;
  let fixture: ComponentFixture<GanaderoLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanaderoLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanaderoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
