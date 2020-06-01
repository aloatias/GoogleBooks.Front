import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { BooksCatalogSearch } from '../Dtos/BooksCatalogSearch';
import { BooksDetailsForCatalog } from '../Dtos/BooksDetailsForCatalog';
import { PageEvent } from '@angular/material/paginator';

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
  
  public keywords: string = "roger federer";
  public totalResults: number;
  public pageSize: number = 40;
  public pageNumber: number = 0;

  public pageSizeOptions: number[] = [5, 10, 25, 40];

  constructor(
    private _booksService: BooksService) { }

  ngOnInit(): void {
    this.getBooksCatalog();
  }

  public getBooksCatalog() : void {
    let booksCatalogSearchOptions = this.getBooksCatalogSearchOptions();

    this._booksService.getBooksCatalog(booksCatalogSearchOptions)
      .subscribe(
        b => {
          this.totalResults = b.pagingInfo.totalItems;
          this.booksCatalogSearchResult = b.booksCatalog.bookDetails;
        }
      );
  }

  private getBooksCatalogSearchOptions(): BooksCatalogSearch{
    return new BooksCatalogSearch(this.keywords, this.pageNumber, this.pageSize);
  }

  public setPageSizeOptions(setPageSizeOptionsInput: string) : void{
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  public pageBooksCatalog(event: PageEvent) : PageEvent {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;

    this.getBooksCatalog();

    return event;
  }

  pageEvent: PageEvent;
}
