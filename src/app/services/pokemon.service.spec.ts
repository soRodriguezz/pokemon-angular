import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PikachuMock } from '../mock/pikachu.mock';
import { PokemonService } from './pokemon.service';


describe('PokemonService', () => {

    let httpClientSpy: { get: jasmine.Spy };
    let pokemonService: PokemonService;

    beforeEach(() => {

        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        
        pokemonService = new PokemonService(<any>httpClientSpy);
        
        TestBed.configureTestingModule({});
        
    });
    
    it('obtener pokemon pokemon', (done) => {
        
        const pokemon = 'pikachu';
        
        httpClientSpy.get.and.returnValue(of(PikachuMock));

        pokemonService.getPokemon(pokemon).subscribe(pokemon => {
            expect(pokemon).toEqual(PikachuMock);
            done();
        });

    });

});