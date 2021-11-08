import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book, Chapter } from '../book';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css'],
})
export class ChapterComponent {
  book: Book;
  chapter: Chapter;
  bookId;
  currentChapterIndex;
  nextChapterIndex;

  constructor(private route: ActivatedRoute) {
    this.book = history.state.data.book;
    this.bookId = history.state.data.bookId;
    this.currentChapterIndex = parseInt(
      this.route.snapshot.paramMap.get('chapterId')!,
      10
    );
    this.chapter = this.book.chapters[this.currentChapterIndex];
    this.nextChapterIndex = this.currentChapterIndex + 1;
  }
}
