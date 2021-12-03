import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film.models';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  //  films: string[];
  //tableau de film
  films: Film[];
  constructor(private filmService: FilmService) {

    // this.films = ["Dora", "dark", "stars"];
    /*this.films = [

      { idFilm: 1, titre: "Dora", prixticket: 3000.600, dateSortie: new Date("01/14/2011") },
      { idFilm: 2, titre: "dark", prixticket: 450, dateSortie: new Date("12/17/2010") },
      {
        idFilm: 3, titre: "stars", prixticket: 900.123, dateSortie: new Date("02/20/2020")      }
    ];
    */
    this.films = filmService.listeFilms();
  }

  ngOnInit(): void {
  }
  supprimerFilm(f: Film) {
    console.log(f);
  }
}
