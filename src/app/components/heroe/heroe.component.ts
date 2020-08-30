import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe:any = {};

  constructor(private activedRoute: ActivatedRoute, private _heroesService: HeroesService) { 
    /**
     * Observador subscribe
     * el id es el mismo que se definio en app.routes.ts
     * params['id'] == path:'heroe/:id'
     */
    this.activedRoute.params.subscribe( params => {
      
      //console.log(params['id']);
      this.heroe = this._heroesService.getHeroe(params['id']);
      //console.log(this.heroe);
    });
   }

}
