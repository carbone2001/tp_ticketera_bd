import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesPorCadaCanalComponent } from './clientes-por-cada-canal.component';

describe('ClientesPorCadaCanalComponent', () => {
  let component: ClientesPorCadaCanalComponent;
  let fixture: ComponentFixture<ClientesPorCadaCanalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesPorCadaCanalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesPorCadaCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
