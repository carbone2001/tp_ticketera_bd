import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesperfectosPorLocalidadesComponent } from './desperfectos-por-localidades.component';

describe('DesperfectosPorLocalidadesComponent', () => {
  let component: DesperfectosPorLocalidadesComponent;
  let fixture: ComponentFixture<DesperfectosPorLocalidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesperfectosPorLocalidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesperfectosPorLocalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
