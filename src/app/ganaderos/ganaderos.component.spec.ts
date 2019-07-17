import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanaderosComponent } from './ganaderos.component';

describe('GanaderosComponent', () => {
  let component: GanaderosComponent;
  let fixture: ComponentFixture<GanaderosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanaderosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanaderosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
