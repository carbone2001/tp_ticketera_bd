import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesDeUnaLocalidadConPlanComponent } from './clientes-de-una-localidad-con-plan.component';

describe('ClientesDeUnaLocalidadConPlanComponent', () => {
  let component: ClientesDeUnaLocalidadConPlanComponent;
  let fixture: ComponentFixture<ClientesDeUnaLocalidadConPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesDeUnaLocalidadConPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesDeUnaLocalidadConPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
