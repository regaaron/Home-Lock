import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HFavComponent } from './hfav.component';

describe('HFavComponent', () => {
  let component: HFavComponent;
  let fixture: ComponentFixture<HFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HFavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
