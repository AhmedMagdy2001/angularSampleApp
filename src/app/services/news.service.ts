import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsModel } from '../models/news.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'https://localhost:44332/api/news/';
  private getTokenHeader(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllNews(): Observable<NewsModel[]> {
    const headers = this.getTokenHeader();
    return this.http.get<NewsModel[]>(this.apiUrl,{headers});
  }

  getNewsById(id: number): Observable<NewsModel> {
    const headers = this.getTokenHeader();
    return this.http.get<NewsModel>(this.apiUrl+id,{headers});
  }

  addNews(news: NewsModel): Observable<any> {
    const headers = this.getTokenHeader();
    return this.http.post(this.apiUrl, news,{headers});
  }

  updateNews(news: NewsModel): Observable<any> {
    const headers = this.getTokenHeader();
    return this.http.put(this.apiUrl+news.id, news,{headers});
  }

  deleteNews(id: number): Observable<any> {
    const headers = this.getTokenHeader();
    return this.http.delete(this.apiUrl+id,{headers});
  }
}
