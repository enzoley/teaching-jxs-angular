import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Pokemon } from "./pokemon";

@Injectable({
  providedIn: 'root'
})

export class AccesPokeAPIService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  constructor(private http: HttpClient) {}

  getPokemon(): Observable<Pokemon[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((data: any) => {
        let pokemonList: Pokemon[] = [];
        let id = 1;
        data.results.forEach((element: any) => {
          pokemonList.push(new Pokemon(id, element.name));
          id++;
        });
        return pokemonList;
      })
    );
  }
}
