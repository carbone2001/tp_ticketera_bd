import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentroAreaServicioDeLocalidadComponent } from './dentro-area-servicio-de-localidad.component';

describe('DentroAreaServicioDeLocalidadComponent', () => {
  let component: DentroAreaServicioDeLocalidadComponent;
  let fixture: ComponentFixture<DentroAreaServicioDeLocalidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentroAreaServicioDeLocalidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentroAreaServicioDeLocalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
