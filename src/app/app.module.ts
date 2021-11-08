import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { BookComponent } from './book/book.component';
import { ChapterComponent } from './chapter/chapter.component';

@NgModule({
  declarations: [
    AppComponent,
    BookshelfComponent,
    BookComponent,
    ChapterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
