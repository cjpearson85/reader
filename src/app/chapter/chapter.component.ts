import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from '../book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css'],
  providers: [BooksService],
})
export class ChapterComponent implements OnInit {
  book: Book | undefined;
  bookId = 0;
  chapterId = 0;
  nextChapterId = 0;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe((params) => {
      this.setChapter();
    });
  }

  ngOnInit(): void {
    this.getBook();
    this.setChapter();
  }

  getBook(): void {
    const bookId = parseInt(this.route.snapshot.paramMap.get('bookId')!, 10);
    this.bookId = bookId;
    this.booksService.getBook(bookId).subscribe((book) => (this.book = book));
  }

  setChapter(): void {
    if (!this.book) return;
    const chapterId = parseInt(
      this.route.snapshot.paramMap.get('chapterId')!,
      10
    );
    if (chapterId >= this.book.chapters.length) {
      this.router.navigate([`/books/${this.bookId}/chapters/0`]);
    } else {
      this.chapterId = chapterId;
      if (chapterId >= this.book.chapters.length - 1) {
        this.nextChapterId = 0;
      } else {
        this.nextChapterId = chapterId + 1;
      }
    }
  }
}
