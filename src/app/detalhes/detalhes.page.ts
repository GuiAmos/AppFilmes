import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  constructor(private route: ActivatedRoute, private rota: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.nameRecebido = params['name'];
    })
 }

 nameRecebido:string = '';
}
