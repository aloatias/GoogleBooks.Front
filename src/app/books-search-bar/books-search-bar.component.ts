import { Component, OnInit } from '@angular/core';
import { BooksCatalogComponent } from '../books-catalog/books-catalog.component';

@Component({
  selector: 'app-books-search-bar',
  templateUrl: './books-search-bar.component.html',
  styleUrls: ['./books-search-bar.component.css']
})
export class BooksSearchBarComponent implements OnInit {
  public keywords: string = "Angular development";

  constructor(private _booksCatalog: BooksCatalogComponent) { }

  ngOnInit(): void {
    this.getBooksCatalog();
  }

  public getBooksCatalog() : void {
    this._booksCatalog.getBooksCatalog(this.keywords);
  }
}
