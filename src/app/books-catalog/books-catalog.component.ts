import { Component, OnInit, InjectionToken } from '@angular/core';
import { BooksService } from '../books.service';
import { BooksCatalogSearch } from '../Dtos/BooksCatalogSearch';
import { BooksDetailsForCatalog } from '../Dtos/BooksDetailsForCatalog';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { BookDetailsComponent } from '../book-details/book-details.component';

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

  public keywords: string = "Angular development";
  public totalResults: number;
  public pageSize: number = 40;
  public pageNumber: number = 0;
  public pageEvent: PageEvent;

  public pageSizeOptions: number[] = [5, 10, 25, 40];

  public showSpinner: boolean;
  public showNoResultsMessage: boolean = false;

  constructor(
    private _booksService: BooksService,
    private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBooksCatalog();
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
          if (b.pagingInfo.totalItems > 0) {
            this.totalResults = b.pagingInfo.totalItems;
            this.booksCatalogSearchResult = b.booksCatalog.bookDetails;;
          }

          this.showNoResultsMessage = b.pagingInfo.totalItems == 0;

          this.showSpinner = false;
        }
      );
  }

  private getBooksCatalogSearchOptions(): BooksCatalogSearch {
    return new BooksCatalogSearch(this.keywords, this.pageNumber, this.pageSize);
  }

  private setPageSizeOptions(setPageSizeOptionsInput: string): void {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => + str);
    }
  }

  public pageBooksCatalog(event: PageEvent) : PageEvent {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;

    this.getBooksCatalog();
    return event;
  }

  openDialog(bookId: string) : void {
    const dialogRef = this._dialog.open(BookDetailsComponent, {
      width: '250px',
      data: { bookId: bookId }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
