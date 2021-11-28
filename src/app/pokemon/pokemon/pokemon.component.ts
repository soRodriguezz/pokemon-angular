import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  public result:any;
  public image: any;
  public name: any;
  public type: any;

  public formulario: FormGroup = this.fb.group({
    nombre: ['']
  });

  constructor( private pokemonService: PokemonService, private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  getPokemon() {
    this.pokemonService.getPokemon(this.formulario.controls.nombre.value).subscribe( resp => {
      this.result = resp;
      this.image = resp.sprites.front_default;
      this.name = resp.name;
      this.type = resp.types[0].type.name;
    },
    error => {
      const alert = document.createElement('div');
      alert.className = 'alert alert-danger mt-2 mb-2';
      alert.setAttribute('role', 'alert');
      alert.innerText = 'No existe pokemon con ese nombre';

      const div = document.querySelector('div');
      div?.appendChild(alert);

      setTimeout( () => {
        div?.removeChild(alert);
      }, 2000);
    }
    );
   
  }



}
