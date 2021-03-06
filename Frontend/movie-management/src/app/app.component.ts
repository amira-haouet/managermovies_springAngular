import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-management';
  router: Router;

  constructor(public authService: AuthService) { }


  ngOnInit() {
    this.authService.loadToken();
    if (this.authService.getToken() == null ||
      this.authService.isTokenExpired())
      this.router.navigate(['/login']);
  }
  /*ngOnInit() {
    let isloggedin: string;
    let loggedUser: string;
    isloggedin = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');
    if (isloggedin != "true" || !loggedUser)
      this.router.navigate(['/login']);
    else
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }*/

  /*
    ngOnInit() {
      let isloggedin: string;
      let loggedUser: string;
      isloggedin = localStorage.getItem('isloggedIn');
      loggedUser = localStorage.getItem('loggedUser');
      if (isloggedin != "true" || !loggedUser)
        this.router.navigate(['/login']);
      else
        this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }*/
}
