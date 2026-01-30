import { Injectable } from '@angular/core';

export interface Book {
  id: number
  title: string;
  author: string;
  available: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private books: Book[] = [
    { id: 1, title: 'The Lion The Witch and the Wardrobe', author: 'C. S. Lewis', available: true },
    { id: 2, title: 'Prince Caspian', author: 'C. S. Lewis', available: true },
    { id: 3, title: 'The Voyage of the Dawn Treader', author: 'C. S. Lewis', available: false },
  ]

  getBooks() {
    return this.books;
  }

  borrowBook(id: number) {
    const book = this.books.find(b => b.id === id);
    if (book && book.available) {
      book.available = false;
    }
  }

  getLoans() {
    return this.books.filter(b => !b.available);
  }
}

