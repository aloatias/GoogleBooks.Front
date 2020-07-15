import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalParameters } from '../Shared/GlobalParameters';
import { Global } from '../Shared/Global';

@Component({
  selector: 'app-books-search-bar',
  templateUrl: './books-search-bar.component.html',
  styleUrls: ['./books-search-bar.component.css']
})
export class BooksSearchBarComponent implements OnInit {
  public keywords: string;

  constructor(
    private _router: Router,
    private _globalParams: GlobalParameters
  ) 
  {}

  ngOnInit() {
    this.keywords = this._globalParams.keywords;
  }

  public getBooksCatalog() : void {
    this._globalParams.keywords = this.keywords;
    this._router.navigate(["books/catalog/", this._globalParams.keywords]);
  }
}
