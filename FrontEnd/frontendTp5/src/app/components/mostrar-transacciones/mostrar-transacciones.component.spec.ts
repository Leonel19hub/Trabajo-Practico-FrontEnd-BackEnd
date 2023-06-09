import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTransaccionesComponent } from './mostrar-transacciones.component';

describe('MostrarTransaccionesComponent', () => {
  let component: MostrarTransaccionesComponent;
  let fixture: ComponentFixture<MostrarTransaccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarTransaccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarTransaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
