import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaunicaComponent } from './casaunica.component';

describe('CasaunicaComponent', () => {
  let component: CasaunicaComponent;
  let fixture: ComponentFixture<CasaunicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasaunicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasaunicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
