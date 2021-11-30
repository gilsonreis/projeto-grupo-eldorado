import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment"
import { EMPTY, Observable } from 'rxjs';
import News from '../models/news.model';
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  // RxJS
  getAll(page?, per_page?): Observable<News> { // Esse esquema de passar uma classe dentro de < > se chama generics. Pesquisem depois.

    page = typeof page !== "undefined" ? page : 1;
    let url_page = `?page=${page}`;
    url_page += `&per_page=${per_page}`
    
    return this.http.get<News>(`${environment.baseApiUrl}/news${url_page}`)
              .pipe(
                map(obj => obj),
                catchError(e => this.errorHandler(e))
              )
  }

  create(formData: FormData): Observable<News> {
    return this.http.post<News>(`${environment.baseApiUrl}/news`, formData)
    // .pipe(
    //   map(obj => obj),
    //   catchError(e => this.errorHandler(e))
    // )
  }

  getById(id): Observable<News> {
    return this.http.get<News>(`${environment.baseApiUrl}/news/${id}`);
  }


  errorHandler(e: any): Observable<any> {
    let errors = [];
    for(let er of e.error.message) {
      errors.push(er)
    }
    let str_errors = JSON.stringify(errors);
    throw new Error(str_errors)
    return EMPTY;
  }
}


