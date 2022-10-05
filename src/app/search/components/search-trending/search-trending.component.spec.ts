import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTrendingComponent } from './search-trending.component';

describe('SearchTrendingComponent', () => {
  let component: SearchTrendingComponent;
  let fixture: ComponentFixture<SearchTrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTrendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
