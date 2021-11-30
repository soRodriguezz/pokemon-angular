import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  constructor( private http: HttpClient) { }

  public getPokemon( pokemon: any): Observable<any> {
    return this.http.get(`${environment.URL_POKEMON}/pokemon/${ pokemon }`);
  }

}

