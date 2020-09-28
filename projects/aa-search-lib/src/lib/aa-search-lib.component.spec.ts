import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaSearchLibComponent } from './aa-search-lib.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AaSearchLibComponent', () => {
  let component: AaSearchLibComponent;
  let fixture: ComponentFixture<AaSearchLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AaSearchLibComponent],
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AaSearchLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
