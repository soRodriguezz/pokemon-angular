import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( private http: HttpClient) { }

  public getPokemon( pokemon: any): Observable<any> {
    return this.http.get(`${environment.URL_POKEMON}/pokemon/${ pokemon }`);
  }

}

