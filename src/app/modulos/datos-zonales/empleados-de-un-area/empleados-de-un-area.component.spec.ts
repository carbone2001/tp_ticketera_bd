import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosDeUnAreaComponent } from './empleados-de-un-area.component';

describe('EmpleadosDeUnAreaComponent', () => {
  let component: EmpleadosDeUnAreaComponent;
  let fixture: ComponentFixture<EmpleadosDeUnAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadosDeUnAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosDeUnAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
