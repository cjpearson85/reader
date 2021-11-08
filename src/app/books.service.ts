import { Injectable } from '@angular/core';

import { Book } from './book';
import { data } from './mock-data';

@Injectable()
export class BooksService {
  getBooks(): Book[] {
    return data;
  }
}
