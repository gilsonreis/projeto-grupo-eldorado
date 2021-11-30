import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../../services/news.service';

@Component({
  selector: 'app-news-index',
  templateUrl: './news-index.component.html',
  styleUrls: ['./news-index.component.sass']
})
export class NewsIndexComponent implements OnInit {

  public noticias;
  public per_page = 15;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.index();
  }

  index(page?) {
    this.newsService.getAll(page, this.per_page).subscribe(noticias => {
      this.noticias = noticias.data
    })
  }

  paginate(page) {
    this.index(page);
  }

  setPerPage(per_page) {
    this.per_page = per_page
    this.index();
  }
}
