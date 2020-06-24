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

  // Authors text variables
  public authorsText: string = "";
  private _commaSeparator: string = ", ";
  private _andSeparator: string = " and ";

  public calculatedPrice: string = "";

  // BookDetails form
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
    thumbnail: new FormControl(''),
    price: new FormControl(''),
    currencyCode: new FormControl(''),
    categories: new FormControl('')
  });

  constructor(
    private _route: ActivatedRoute,
    private _bookService: BooksService) { }

  ngOnInit(): void {
    this.getBookDetails();
  }
  
  private getBookDetails() : void {
    this._route.paramMap.subscribe(params => {
      this._bookService.getBookDetails(params.get("id")).subscribe(book => {
        this.bookForm.patchValue(book);

        // Set price message
        this.calculatedPrice = this.bookForm.value.price !== null ? 
          this.bookForm.value.price + " " + this.bookForm.value.currencyCode : 
          "No available price"

        // Set authors and publisher message
        for (let i = 0; i < book.authors.length; i++) {
          this.authorsText += book.authors[i];

          if (i + 1 < book.authors.length) {
            this.authorsText += this._commaSeparator;
          }
        }

        // Replace last ", " for " and "
        var n = this.authorsText.lastIndexOf(this._commaSeparator);
        this.authorsText =  this.authorsText.slice(0, n) +  this.authorsText.slice(n).replace(this._commaSeparator, this._andSeparator);
      });
    });
  }
}
