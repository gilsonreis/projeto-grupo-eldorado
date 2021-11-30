import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  nome = "Bob esponja"
  imagem = "https://via.placeholder.com/150"
  altImagem = "Imagem muito bacana!"
  comida = ""
  comidaQueGosta
  comidaQueNaoGosta

  noticias

  constructor(newsService: NewsService) {
    this.comidaQueGosta = []
    this.comidaQueNaoGosta = []

    // let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril']
    // console.log(meses.indexOf('Março'))

    // meses.splice(meses.indexOf('Março'), 1)
    // console.log(meses)
    // meses.map((mes, indice) => {
    //   console.log(indice + " - " + mes);
    // })

    newsService.getAll().subscribe(noticias => {
      this.noticias = noticias;
    })


  }

  ngOnInit(): void {
  }

  fnClicar(nome: string) {
    alert(`Fui clicado pelo ${nome}`)
  }

  setGostaComida(resposta: string) {
    if (resposta === 'S') {
      this.comidaQueGosta.push(this.comida);
    }

    if (resposta === 'N') {
      this.comidaQueNaoGosta.push(this.comida);
    }
    this.comida = ""
  }

  removeComidaQueGosta(comida: string) {
    let indice = this.comidaQueGosta.indexOf(comida)
    console.log(indice, comida)
    this.comidaQueGosta.splice(indice, 1);
    console.log(this.comidaQueGosta)
  }

  removeComidaQueNaoGosta(comida: string) {
    let indice = this.comidaQueNaoGosta.indexOf(comida)
    console.log(indice, comida)
    this.comidaQueNaoGosta.splice(indice, 1);
    console.log(this.comidaQueNaoGosta)
  }

  

}
