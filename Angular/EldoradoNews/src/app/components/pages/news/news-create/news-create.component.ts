import { Component, OnInit } from '@angular/core';
import News from 'src/app/models/news.model';
import { CategoryService } from '../../../../services/category.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.sass']
})
export class NewsCreateComponent implements OnInit {
  public noticia: News = {
    status: "",
    data: {
      title: "",
      news_body: "",
      posted_by: "",
      cover: "",
      is_actived: false,
      category: null,
      created_at: null,
      full_path: "string",
    }
  };

  public file;
  public categorias = {
    data: {
      name: "",
    }
  };
  public hasErrors;
  public errors = []
  public hasSuccess;
  public successMessage;

  constructor(private categoryService: CategoryService, private newsService: NewsService) { }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias() {
    return this.categoryService.getAll().subscribe(categorias => {
      this.categorias = categorias;
      console.log(this.categorias)
    })
  }

  addNew() {
    let formData: FormData = new FormData();
    formData.append('title', this.noticia.data.title);
    formData.append('news_body', this.noticia.data.news_body);
    formData.append('posted_by', this.noticia.data.posted_by);
    formData.append('is_actived', '1');
    formData.append('category[id]', this.noticia.data.category);

    if(this.file){
      formData.append("cover", this.file, this.file['name']);
    }
    
    this.newsService.create(formData).subscribe(noticia => {
      this.hasSuccess = true;
      this.successMessage = noticia.data.title
      this.noticia = {
        status: "",
        data: {
          title: "",
          news_body: "",
          posted_by: "",
          cover: "",
          is_actived: false,
          category: null,
          created_at: null,
          full_path: "string",
        }
      };
    }, error => {
      console.log(error)
      this.hasErrors = true;

      if (error.status === 409) {
        this.errors.push(error.error.data.title)
      }

      for(let err of error.error.message) {
        this.errors.push(err.message);
      }
    })
 
  }

  handleFile(arquivo) {
    this.file = arquivo[0] || null;
  }

}
