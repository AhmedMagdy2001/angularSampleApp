import { Component, OnInit } from '@angular/core';
import { NewsModel } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList: NewsModel[] = [];
  newNews: NewsModel = { title: '', description: '' };


  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(): void {
    this.newsService.getAllNews().subscribe(
      (newsList) => {
        this.newsList = newsList;
      },
      (error) => {
        console.error('Error loading news:', error);
      }
    );
  }

  addNews(): void {
    this.newsService.addNews(this.newNews).subscribe(
      () => {
        console.log('News added successfully!');
        this.newNews = { title: '', description: '' };
        // Reload the news after adding
        this.loadNews();
      },
      (error) => {
        console.error('Error adding news:', error);
      }
    );
  }



  updateNews(news: NewsModel): void {

    this.newsService.updateNews(news).subscribe(
      () => {
        console.log('News updated successfully!');

        // Reload the news after updating
        this.loadNews();
      },
      (error) => {
        console.error('Error updating news:', error);
      }
    );

  }



  deleteNews(id: number): void {
    this.newsService.deleteNews(id).subscribe(
      () => {
        console.log('News deleted successfully!');
        // Reload the news after deletion
        this.loadNews();
      },
      (error) => {
        console.error('Error deleting news:', error);
      }
    );
  }
}
