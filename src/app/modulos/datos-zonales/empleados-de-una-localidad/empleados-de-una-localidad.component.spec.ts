import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosDeUnaLocalidadComponent } from './empleados-de-una-localidad.component';

describe('EmpleadosDeUnaLocalidadComponent', () => {
  let component: EmpleadosDeUnaLocalidadComponent;
  let fixture: ComponentFixture<EmpleadosDeUnaLocalidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadosDeUnaLocalidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosDeUnaLocalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
