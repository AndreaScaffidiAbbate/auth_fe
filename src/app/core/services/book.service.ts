import { Injectable } from '@angular/core';
import {lastValueFrom} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BookModel} from "../models/book.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAll() {
    return lastValueFrom(this.http.get<BookModel[]>('http://localhost:3000/books'));
  }
}
