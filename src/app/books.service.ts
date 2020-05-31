import { Injectable } from '@angular/core';
import { BooksCatalogSearch } from './Helpers/BooksCatalogSearch';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Urls } from './Shared/BaseUrl';
import { catchError } from 'rxjs/operators';
import { BooksCatalogSearchResult } from './Dtos/BooksCatalogSearchResult';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  }),
  params: new HttpParams()
};

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  constructor(
    private _http: HttpClient) {
  }

  GetBooksCatalog(booksCatalogSearch: BooksCatalogSearch) : Observable<BooksCatalogSearchResult> {
    return this._http
      .post<BooksCatalogSearchResult>(Urls.BOOK_GETBOOKSCATALOG, booksCatalogSearch, httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      if (error.status !== 500) {
        errorMessage = error.error;
      } else {
        errorMessage = "Un error occurred. Please try again later";
      }
    }

    alert(errorMessage);

    return throwError(errorMessage);
  }
}
