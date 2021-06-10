import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanzamientosAntesDeComponent } from './lanzamientos-antes-de.component';

describe('LanzamientosAntesDeComponent', () => {
  let component: LanzamientosAntesDeComponent;
  let fixture: ComponentFixture<LanzamientosAntesDeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanzamientosAntesDeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanzamientosAntesDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
