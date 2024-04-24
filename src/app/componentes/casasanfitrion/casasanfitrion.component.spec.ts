import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasasanfitrionComponent } from './casasanfitrion.component';

describe('CasasanfitrionComponent', () => {
  let component: CasasanfitrionComponent;
  let fixture: ComponentFixture<CasasanfitrionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasasanfitrionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasasanfitrionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
