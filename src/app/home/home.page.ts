import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FilmesService } from '../service/filmes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,
    private filmesService: FilmesService) {}

  async ngOnInit(){
    console.log('passou no home');
    this.carregarFilmes();
    //this.filmesService.getProductions();
  }
  async carregarFilmes(){
    this.filmes = await this.filmesService.getProductions();
    console.log("filmes carregados", this.filmes)
    const [firstkey] = Object.keys(this.filmes);
    this.destaque = this.filmes[firstkey];

    this.filmesService.splice(firstkey, 1)
    console.log('firstkey', firstkey)
    console.log('destque',this.destaque)
    console.log('filmes', this.filmes)
  }

  pageContato(){
    this.router.navigate(['/detalhes'])
  }
}
