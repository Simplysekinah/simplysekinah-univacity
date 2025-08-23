import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsituteModalComponent } from './insitute-modal.component';

describe('InsituteModalComponent', () => {
  let component: InsituteModalComponent;
  let fixture: ComponentFixture<InsituteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsituteModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsituteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
