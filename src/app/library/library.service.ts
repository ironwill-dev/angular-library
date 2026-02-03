import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

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
  private books = signal<Book[]>([
    { id: 1, title: 'The Lion The Witch and the Wardrobe', author: 'C. S. Lewis', available: true },
    { id: 2, title: 'Prince Caspian', author: 'C. S. Lewis', available: true },
    { id: 3, title: 'The Voyage of the Dawn Treader', author: 'C. S. Lewis', available: false },
  ]);

  getBooks() {
    return this.books.asReadonly();
  }

  borrowBook(id: number) {
    this.books.update(books => 
      books.map(b => b.id === id ? { ...b, available: false } : b)
    );
  }

  getLoans() {
    return this.books().filter(b => !b.available);
  }
}

