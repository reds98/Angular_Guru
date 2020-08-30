import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {
  heroes: any[] = [];
  termino:string="";

  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService) {


  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params["id"]);
      this.heroes = this._heroesService.buscarHeroes(params["termino"]);
      this.termino=params["termino"]
      console.log(this.heroes)
    })
  }

}
