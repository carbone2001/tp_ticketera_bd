import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTicketsComponent } from './listado-tickets.component';

describe('ListadoTicketsComponent', () => {
  let component: ListadoTicketsComponent;
  let fixture: ComponentFixture<ListadoTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
