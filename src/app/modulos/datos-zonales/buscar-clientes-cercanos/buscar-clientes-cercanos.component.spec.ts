import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarClientesCercanosComponent } from './buscar-clientes-cercanos.component';

describe('BuscarClientesCercanosComponent', () => {
  let component: BuscarClientesCercanosComponent;
  let fixture: ComponentFixture<BuscarClientesCercanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarClientesCercanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarClientesCercanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
