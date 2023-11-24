import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GimnasioComponent } from './gimnasio.component';

describe('GimnasioComponent', () => {
  let component: GimnasioComponent;
  let fixture: ComponentFixture<GimnasioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GimnasioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GimnasioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
