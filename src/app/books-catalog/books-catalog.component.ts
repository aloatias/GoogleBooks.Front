import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { BooksCatalogSearch } from '../Helpers/BooksCatalogSearch';

@Component({
  selector: 'app-books-catalog',
  templateUrl: './books-catalog.component.html',
  styleUrls: ['./books-catalog.component.css']
})
export class BooksCatalogComponent implements OnInit {

  constructor(
    private _booksService: BooksService) { }

  ngOnInit(): void {
    this.GetBooksCatalog();
  }

  GetBooksCatalog() {
    let booksCatalogSearchOptions = this.GetBooksCatalogSearchOptions();

    this._booksService.GetBooksCatalog(booksCatalogSearchOptions)
      .subscribe(
        b => console.log(b)
      );
  }

  GetBooksCatalogSearchOptions() {
    return  new BooksCatalogSearch("federer", 0, 40);
  }
}
