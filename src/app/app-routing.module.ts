import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { ChapterComponent } from './chapter/chapter.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BookshelfComponent },
  { path: 'books/:bookId', component: BookComponent },
  { path: 'books/:bookId/chapters/:chapterId', component: ChapterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
