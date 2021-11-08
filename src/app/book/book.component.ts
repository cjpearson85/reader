import { Component } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  book: Book;
  bookId = 0;

  constructor() {
    this.book = history.state.data.book;
    this.bookId = history.state.data.bookId;
  }
}
