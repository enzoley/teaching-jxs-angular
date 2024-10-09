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
  selectedPokemon: Pokemon = new Pokemon(0, '');
  searchString: string = '';

  pokemon = new Pokemon(1, 'Bulbasaur');
  pokemon2 = new Pokemon(2, 'Ivysaur');
  pokemon3 = new Pokemon(3, 'Venusaur');
  pokemon4 = new Pokemon(4, 'Charmander');
  pokemon5 = new Pokemon(5, 'Charmeleon');
  pokemon6 = new Pokemon(6, 'Charizard');

  l: Observable<Pokemon[]> | undefined;

  constructor(private accesPokeAPIService: AccesPokeAPIService) {}

  ngOnInit(): void {
    this.l = this.accesPokeAPIService.getPokemon();
  }

  afficherPokemon() {
    console.log(this.id);
  }
}
