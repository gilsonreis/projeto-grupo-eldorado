import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.sass']
})
export class NewsViewComponent implements OnInit {

  public noticia;
  constructor(private route: ActivatedRoute, private newsService: NewsService) { }
  
  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.newsService.getById(id).subscribe(noticia => {
      this.noticia = noticia.data;
    })
  }

}
