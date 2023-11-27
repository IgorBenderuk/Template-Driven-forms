import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCRUDComponent } from './hero-crud.component';

describe('HeroCRUDComponent', () => {
  let component: HeroCRUDComponent;
  let fixture: ComponentFixture<HeroCRUDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroCRUDComponent]
    });
    fixture = TestBed.createComponent(HeroCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
