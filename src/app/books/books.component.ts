import { Component, inject } from '@angular/core';
import { LibraryService } from '../library/library.service';

@Component({
  selector: 'app-books',
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  private libraryService = inject(LibraryService)

  books = this.libraryService.getBooks();

  borrow(id: number) {
    this.libraryService.borrowBook(id);
  }
}
