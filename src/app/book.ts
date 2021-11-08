export interface Book {
  title: string;
  cover: string;
  author: string;
  description: string;
  chapters: Chapter[];
}

export interface Chapter {
  title: string;
  paragraphs: string[];
}
