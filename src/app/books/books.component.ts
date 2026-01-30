import { Component, OnInit } from '@angular/core';
import { LibraryService, Book } from '../library/library.service';

@Component({
  selector: 'app-books',
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books: Book[] = [];

  constructor(private libraryService: LibraryService) {}

  ngOnInit() {
    this.books = this.libraryService.getBooks();
  }

  borrow(id: number) {
    this.libraryService.borrowBook(id);
  }
}
