import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelGanaderoComponent } from './panel-ganadero.component';

describe('PanelGanaderoComponent', () => {
  let component: PanelGanaderoComponent;
  let fixture: ComponentFixture<PanelGanaderoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelGanaderoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelGanaderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
