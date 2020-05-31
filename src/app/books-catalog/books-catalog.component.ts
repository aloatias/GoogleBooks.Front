import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { BooksCatalogSearch } from '../Dtos/BooksCatalogSearch';
import { BooksDetailsForCatalog } from '../Dtos/BooksDetailsForCatalog';

@Component({
  selector: 'app-books-catalog',
  templateUrl: './books-catalog.component.html',
  styleUrls: ['./books-catalog.component.css']
})

export class BooksCatalogComponent implements OnInit {
  public booksCatalogSearchResult: BooksDetailsForCatalog[] = new Array<BooksDetailsForCatalog>();
  public rowSpan: number = 3;
  public colSpan: number = 2;
  public color: string = "white";
  public noImageAvailablePicturePath: string = "assets/no_image.png";

  constructor(
    private _booksService: BooksService) { }

  ngOnInit(): void {
    this.GetBooksCatalog();
  }

  GetBooksCatalog() {
    let booksCatalogSearchOptions = this.GetBooksCatalogSearchOptions();

    this._booksService.GetBooksCatalog(booksCatalogSearchOptions)
      .subscribe(
        b => {
          this.booksCatalogSearchResult = this.booksCatalogSearchResult.concat(b.booksCatalog.bookDetails);
        }
      );
  }

  GetBooksCatalogSearchOptions(): BooksCatalogSearch{
    return new BooksCatalogSearch("federer", 1, 40);
  }
}
