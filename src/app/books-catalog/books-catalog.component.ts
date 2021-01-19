import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { BooksCatalogSearch } from '../Dtos/BooksCatalogSearch';
import { BooksDetailsForCatalog } from '../Dtos/BooksDetailsForCatalog';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';

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

  public keywords: string = "";
  public totalResults: number;
  public pageSize: number = 40;
  public pageNumber: number = 0;
  public pageEvent: PageEvent;

  public pageSizeOptions: number[] = [5, 10, 25, 40];

  public showSpinner: boolean;
  public showNoResultsMessage: boolean = false;

  public bookId: string;
  
  constructor(
    private _route: ActivatedRoute,
    private _booksService: BooksService) { }

  ngOnInit() {
    this._route.params.subscribe(routeParams => {
      this.keywords = routeParams.keywords

      this.getBooksCatalog();
    });
  }

  public getBooksCatalog(): void {
    if (this.keywords.length < 2) {
      alert("You have to enter at least a two letter long keyword");
      return
    }

    this.showSpinner = true;

    let booksCatalogSearchOptions = this.getBooksCatalogSearchOptions();

    this._booksService.getBooksCatalog(booksCatalogSearchOptions)
      .subscribe(
        b => {
          if (b != null)
          {
            if (b.pagingInfo.totalItems > 0) {
              this.totalResults = b.pagingInfo.totalItems;
              this.booksCatalogSearchResult = b.booksCatalog.bookDetails;
              this.showNoResultsMessage = false;
            }
          } else {
            this.showNoResultsMessage = true;
          }

          this.showSpinner = false;
        }
      );
  }

  private getBooksCatalogSearchOptions(): BooksCatalogSearch {
    return new BooksCatalogSearch(this.keywords, this.pageNumber, this.pageSize);
  }

  public pageBooksCatalog(event: PageEvent) : PageEvent {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;

    this.getBooksCatalog();
    return event;
  }
}
