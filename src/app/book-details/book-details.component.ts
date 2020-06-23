import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../books.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  public noImageAvailablePicturePath: string = "assets/no_image.png";

  public authorsText: string = "Written by ";

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
    private _route: ActivatedRoute,
    private _bookService: BooksService) { }

  ngOnInit(): void {
    this.getBookDetails();
  }
  
  private getBookDetails() : void {
    this._route.paramMap.subscribe(params => {
      this._bookService.getBookDetails(params.get('id')).subscribe(book => {
        this.bookForm.patchValue(book);

        for (let i = 0; i < book.authors.length; i++) {
          this.authorsText += book.authors[i];

          if (i + 1 < book.authors.length - 1) {
            this.authorsText += ", ";
          } else if (i < book.authors.length - 1){
            this.authorsText += " and ";
          }
        }
      });
    });
  }
}
