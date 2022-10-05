import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNormalComponent } from './search-normal.component';

describe('SearchNormalComponent', () => {
  let component: SearchNormalComponent;
  let fixture: ComponentFixture<SearchNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchNormalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
