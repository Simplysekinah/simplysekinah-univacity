import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredModalComponent } from './filtered-modal.component';

describe('FilteredModalComponent', () => {
  let component: FilteredModalComponent;
  let fixture: ComponentFixture<FilteredModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilteredModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteredModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
