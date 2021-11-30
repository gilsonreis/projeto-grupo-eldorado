import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { MenuComponent } from './components/templates/menu/menu.component';
import { HomeComponent } from './components/pages/home_aula/home.component';
import { NewsIndexComponent } from './components/pages/news/news-index/news-index.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NewsCreateComponent } from './components/pages/news/news-create/news-create.component';
import { NewsViewComponent } from './components/pages/news/news-view/news-view.component';
import { LoginComponent } from './components/pages/login/login.component'
import { ContainerComponent } from './components/pages/container/container.component';
import { JwtInterceptor } from './services/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    NewsIndexComponent,
    NewsCreateComponent,
    NewsViewComponent,
    LoginComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, 
    useClass: JwtInterceptor, 
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
