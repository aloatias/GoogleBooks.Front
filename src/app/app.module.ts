import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksCatalogComponent } from './books-catalog/books-catalog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule  } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    BooksCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
