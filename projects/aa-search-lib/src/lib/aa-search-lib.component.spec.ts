import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaSearchLibComponent } from './aa-search-lib.component';

describe('AaSearchLibComponent', () => {
  let component: AaSearchLibComponent;
  let fixture: ComponentFixture<AaSearchLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaSearchLibComponent ]
    })
    .compileComponents();
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
