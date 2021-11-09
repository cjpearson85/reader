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

  constructor(private booksService: BooksService) {
    this.booksService.getBooks().subscribe((books) => (this.books = books));
  }
}
