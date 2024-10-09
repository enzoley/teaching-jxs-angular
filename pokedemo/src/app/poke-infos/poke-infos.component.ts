import {Component, Input, SimpleChanges} from '@angular/core';
import {AccesPokeAPIService} from "../acces-poke-api.service";

@Component({
  selector: 'app-poke-infos',
  templateUrl: './poke-infos.component.html',
  styleUrl: './poke-infos.component.css',
  providers : [AccesPokeAPIService]
})
export class PokeInfosComponent{
  @Input() id : number = 0;
  name : string = '';
  img : string = '';
  height : string = '';
  type : string = '';

  constructor(private accesPokeAPIService: AccesPokeAPIService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'] && !changes['id'].isFirstChange()) {
      this.setInfos();
    }
  }

  setInfos() {
    let l = this.accesPokeAPIService.getPokemonDetails(this.id).subscribe((pokemon) => {
      this.name = pokemon.name;
      this.img = pokemon.img;
      this.height = pokemon.height;
      this.type = pokemon.type;
    })
  }


}
