import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BooksService],
})
export class BookComponent {
  book: Book | undefined;
  bookId: number;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute
  ) {
    this.bookId = parseInt(this.route.snapshot.paramMap.get('bookId')!, 10);
    this.booksService
      .getBook(this.bookId)
      .subscribe((book) => (this.book = book));
  }
}
