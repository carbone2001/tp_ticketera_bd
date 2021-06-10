import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalesPorCadaClienteComponent } from './canales-por-cada-cliente.component';

describe('CanalesPorCadaClienteComponent', () => {
  let component: CanalesPorCadaClienteComponent;
  let fixture: ComponentFixture<CanalesPorCadaClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanalesPorCadaClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanalesPorCadaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
