import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Books } from './book-details.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit{

  books: Books[] = [];
  
  constructor(private _dataService: DataService){}

  ngOnInit(): void {
    this.books = this._dataService.getData();
  }
}

