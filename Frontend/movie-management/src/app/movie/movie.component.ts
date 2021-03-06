import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-medecin',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  seachForm: FormGroup;
  constructor(private _apiService: ApiService, private formBuilder: FormBuilder, 
    public authService: AuthService) {
    this.seachForm = formBuilder.group(
      {
        sc: new FormControl()
      })
  }

  ngOnInit(): void {
    this.listMedecin()
  }

  movies: Array<any>;
  pages: Array<number>;
  page: number = 0;
  setPage(i, event: any) {
    event.preventDefault();
    this.page = i
    this.listMedecin();
  }

  listMedecin() {
    console.log(this.page)
    this._apiService.getMovie(this.page).subscribe(
      data => {
        console.log(data);
        this.movies = data['content'];
        this.pages = new Array(data['totalPages']);
      }
    )
  }
  listSpecialite() {

    this._apiService.getSc().subscribe(
      data => {
        console.log(data);
        this.movies = data;
      }
    )
  }
  delete(id: number) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      console.log(id)
    this._apiService.deleteMovie(id).subscribe(
      data => {
        console.log(data);
        this.movies = data;
        this.listMedecin()
      }
    )

  }
  search() {

    var scenaristes = this.movies
    var dataMed = this.seachForm.value
    console.log(dataMed.sc)
    this._apiService.getMovieByScneariste(dataMed.sc).subscribe(
      data => {
        console.log(data)
        if (dataMed.sc != null) {
          this.movies = data
        }
        else {
          this.listMedecin()
        }

      }, err => {
        this.listMedecin()
      }
    )
  }
  titre: any;
  searchtest() {
    if (this.titre == "") {
      this.ngOnInit();

    }
    else {
      this.movies = this.movies.filter(

        res => {
          return res.titre.toLowerCase().match(this.titre.toLowerCase());
        })
    }
  }


  key: string = 'titre';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  //authService: AuthService;
}
