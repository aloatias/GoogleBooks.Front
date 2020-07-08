import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksSearchBarComponent } from './books-search-bar.component';

describe('BooksSearchBarComponent', () => {
  let component: BooksSearchBarComponent;
  let fixture: ComponentFixture<BooksSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
