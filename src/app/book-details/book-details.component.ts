import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBookId } from '../Dtos/IBookId';
import { BooksService } from '../books.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  public noImageAvailablePicturePath: string = "assets/no_image.png";

  public bookForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    etag: new FormControl(''),
    authors: new FormControl(''),
    publisher: new FormControl(''),
    publishedDate: new FormControl(''),
    pageCount: new FormControl(''),
    printedPageCount: new FormControl(''),
    dimensions: new FormControl(''),
    language: new FormControl(''),
    previewLink: new FormControl(''),
    infoLink: new FormControl(''),
    canonicalVolumeLink: new FormControl(''),
    smallImage: new FormControl(''),
    mediumImage: new FormControl(''),
    largeImage: new FormControl(''),
    country: new FormControl(''),
    saleability: new FormControl(''),
    amount: new FormControl(''),
    webReaderLink: new FormControl(''),
    smallThumbnail: new FormControl(''),
    thumbnail: new FormControl('')
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IBookId,
    private _bookService: BooksService) { }

  ngOnInit(): void {
    this.getBookDetails();
  }
  
  private getBookDetails() : void {
    this._bookService.getBookDetails(this.data.id)
    .subscribe(book => {
      this.bookForm.patchValue(book)
    });
  }
}
