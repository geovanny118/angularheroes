import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {};//@Input la propiedad heroe puede venir de afuera
  @Input() index:number;

  constructor() { }

  ngOnInit(): void {
  }

}
