import { Component } from '@angular/core';
import {Pokemon} from "../pokemon";

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {

  selectedPokemon: Pokemon = new Pokemon(1, 'Bulbasaur');
  searchString: string = '';

  pokemon = new Pokemon(1, 'Bulbasaur');
  pokemon2 = new Pokemon(2, 'Ivysaur');
  pokemon3 = new Pokemon(3, 'Venusaur');
  pokemon4 = new Pokemon(4, 'Charmander');
  pokemon5 = new Pokemon(5, 'Charmeleon');
  pokemon6 = new Pokemon(6, 'Charizard');

  l = [this.pokemon, this.pokemon2, this.pokemon3, this.pokemon4, this.pokemon5, this.pokemon6];

  afficherPokemon(){
    console.log(this.selectedPokemon.name);
  }

}
