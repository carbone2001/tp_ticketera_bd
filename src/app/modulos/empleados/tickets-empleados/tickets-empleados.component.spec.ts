import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsEmpleadosComponent } from './tickets-empleados.component';

describe('TicketsEmpleadosComponent', () => {
  let component: TicketsEmpleadosComponent;
  let fixture: ComponentFixture<TicketsEmpleadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketsEmpleadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
