import { Component, OnInit } from '@angular/core';
import { Pokemon } from "../pokemon";
import { AccesPokeAPIService } from "../acces-poke-api.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
  providers: [AccesPokeAPIService]
})
export class MyComponentComponent implements OnInit {

  id : number = 0;
  searchString: string = '';

  l: Observable<Pokemon[]> | undefined;

  constructor(private accesPokeAPIService: AccesPokeAPIService) {}

  ngOnInit(): void {
    this.l = this.accesPokeAPIService.getPokemon();
  }

  afficherPokemon() {
    console.log(this.id);
  }
}
