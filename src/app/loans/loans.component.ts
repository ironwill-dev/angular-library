import { Component, OnInit } from '@angular/core';
import { LibraryService, Book } from '../library/library.service';

@Component({
  selector: 'app-loans',
  imports: [],
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.css'
})
export class LoansComponent {
  loans: Book[] = [];

  constructor(private libraryService: LibraryService) {}

  ngOnInit() {
    this.loans = this.libraryService.getLoans();
  }

  loanedCount(): number {
    return this.loans.length;
  }

  returnBook(id: number) {
    this.libraryService.returnBook(id);
    this.loans = this.libraryService.getLoans();
  }
}
