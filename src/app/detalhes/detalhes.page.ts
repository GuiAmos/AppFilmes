import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { FilmesService } from '../service/filmes.service'; /*Aqui*/


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

    filmes:any = [];
    destaque:any = [];

  constructor(private route: ActivatedRoute, private rota: Router, 
    /*Aqui */private filmesService: FilmesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.nameRecebido = params['name'];
      /*Aqui this.filmesService.Detalhes();*/
    })

    this.Detalhes();
 }

 /*Aqui*/async Detalhes(){
  this.filmes = await this.filmesService.Detalhes(14/*this.id*/);
  console.log("filmes carregados", this.filmes)

  
}

nameRecebido:string = '';
  
}
