import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-edit-spec',
  templateUrl: './edit-sc.component.html',
  styleUrls: ['./edit-sc.component.css']
})
export class EditScComponent implements OnInit {
  editForm: FormGroup;
  s: any;
  id: number;

  constructor(
    private _apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    private Aroute: ActivatedRoute) {

    this.editForm = formBuilder.group(
      {
        nom: new FormControl(null, [
          Validators.required,
          Validators.minLength(2)]),

        prenom: new FormControl(null, [
          Validators.required,
          Validators.minLength(2)]),
      })
  }


  //scenariste: Array<any>;

  ngOnInit(): void {

    this.Aroute.queryParams.subscribe(params => {
      this.id = params['id'];

    });
    this.getSpecialiteById(this.id)
    // this.listSpecialite();

  }
  /*listSpecialite() {

    this._apiService.getSpecialite().subscribe(
      data => {
        this.scenariste = data;
      }
    )
  }
*/
  getSpecialiteById(id) {
    this._apiService.getSpecialiteById(id).subscribe(

      data => {
        this.s = data;

      }, error => console.log(error)
    )
  }

  edit() {
    let conf = confirm("si vous voulez modifier cliquer sur ok");
    if (conf)
      var data = this.editForm.value;

    // console.log(data)

    var s = {
      idSc: this.id,
      nomSc: data.nom,
      prenomSc: data.prenom
    }

    this._apiService.updateSpecialite(s).subscribe(
      () => {
        this.router.navigate(['scenariste']);
      }, (error) => { alert("Problème lors de la modification !"); }

    )

  }

}
