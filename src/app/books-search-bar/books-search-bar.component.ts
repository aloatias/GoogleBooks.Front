import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from '../Shared/Global';

@Component({
  selector: 'app-books-search-bar',
  templateUrl: './books-search-bar.component.html',
  styleUrls: ['./books-search-bar.component.css']
})
export class BooksSearchBarComponent implements OnInit {
  public keywords: string;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    this.keywords = Global.defaultKeywords;
  }

  public getBooksCatalog(): void {
    this._router.navigate(["books/catalog/", this.keywords]);
  }
}
