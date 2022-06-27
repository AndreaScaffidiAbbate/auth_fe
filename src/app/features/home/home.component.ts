import { Component, OnInit } from '@angular/core';
import {BookService} from "../../core/services/book.service";
import {BookModel} from "../../core/models/book.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataSource: BookModel[] = [];
  displayedColumns = ['title', 'author'];

  constructor(private bookService: BookService) { }

  async ngOnInit() {
    await this.bookService.getAll().then(books => {
      this.dataSource = books;
    }).catch(error => {
      console.log(error);
    })
  }

}
