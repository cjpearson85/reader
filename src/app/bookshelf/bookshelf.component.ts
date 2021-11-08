import { Component } from '@angular/core';

import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css'],
  providers: [BooksService],
})
export class BookshelfComponent {
  books: Book[] = [];

  constructor(booksService: BooksService) {
    this.books = booksService.getBooks();
  }
}
