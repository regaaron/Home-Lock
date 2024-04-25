import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioBasicoComponent } from './calendario-basico.component';

describe('CalendarioBasicoComponent', () => {
  let component: CalendarioBasicoComponent;
  let fixture: ComponentFixture<CalendarioBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarioBasicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarioBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
