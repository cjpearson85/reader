import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Book } from './book';
import { data } from './mock-data';

@Injectable()
export class BooksService {
  getBooks(): Observable<Book[]> {
    const books = of(data);
    return books;
  }

  getBook(bookId: number): Observable<Book> {
    const book = of(data[bookId]);
    return book;
  }
}
