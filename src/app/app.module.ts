import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksCatalogComponent } from './books-catalog/books-catalog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BooksSearchBarComponent } from './books-search-bar/books-search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksCatalogComponent,
    BookDetailsComponent,
    BooksSearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'books/catalog', pathMatch: 'full' },
      { path: 'books/catalog', component: BooksCatalogComponent },
      { path: 'books/details/:id', component: BookDetailsComponent },
      { path: '**', redirectTo:'books/catalog', pathMatch: 'full' }
    ])
  ],
  providers: [BooksCatalogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
