import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css'],
  providers: [BooksService],
})
export class ChapterComponent {
  book: Book | undefined;
  bookId: number = 0;
  chapterId: number = 0;
  nextChapterId: number = 0;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const bookId = parseInt(this.route.snapshot.paramMap.get('bookId')!, 10);
    this.bookId = bookId;
    this.book = this.booksService.getBook(bookId);
    const chapterId = parseInt(
      this.route.snapshot.paramMap.get('chapterId')!,
      10
    );
    this.chapterId = chapterId;
    if (chapterId >= this.book.chapters.length - 1) {
      this.nextChapterId = 0;
    } else {
      this.nextChapterId = chapterId + 1;
    }
  }
}
