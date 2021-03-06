import { Injectable } from '@angular/core';
import { BooksCatalogSearch } from './Dtos/BooksCatalogSearch';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Urls } from './Shared/BaseUrl';
import { catchError } from 'rxjs/operators';
import { IBooksCatalogSearchResult } from './Dtos/IBooksCatalogSearchResult';
import { IBookDetails } from './Dtos/IBookDetails';

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

  getBooksCatalog(booksCatalogSearch: BooksCatalogSearch) : Observable<IBooksCatalogSearchResult> {
    return this._http
      .post<IBooksCatalogSearchResult>(Urls.BOOK_GETBOOKSCATALOG, booksCatalogSearch, httpOptions)
      .pipe(catchError(this.handleError));
  }

  getBookDetails(id: string) : Observable<IBookDetails>{
    return this._http
      .get<IBookDetails>(Urls.BOOK_GETBOOKDETAILS + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${ error.error.message }`;
    } else {
      // server-side error
      if (error.status !== 500) {
        errorMessage = error.error["errorMessage"];
      } else {
        errorMessage = "Un error occurred. Please try again later";
      }
    }

    alert(errorMessage);

    return throwError(errorMessage);
  }
}
