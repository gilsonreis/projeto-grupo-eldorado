import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NewsIndexComponent } from './components/pages/news/news-index/news-index.component';
import { NewsCreateComponent } from './components/pages/news/news-create/news-create.component';
import { NewsViewComponent } from './components/pages/news/news-view/news-view.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ContainerComponent } from './components/pages/container/container.component';


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: "dashboard",
        component: HomeComponent
      },
      {
        path: "noticias",
        component: NewsIndexComponent,
      },
      {
        path: "noticias/cadastrar",
        component: NewsCreateComponent
      },
      {
        path: "noticias/visualizar/:id",
        component: NewsViewComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
