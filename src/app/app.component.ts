import { Component } from '@angular/core';
import { MovieCardComponent } from './movie-card/movie-card.component';

import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
// import { MovieCardComponent } from './movie-card/movie-card.component';

// Materials
import { MatDialog } from '@angular/material/dialog';
import { FetchApiDataService } from './fetch-api-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FetchApiDataService]
})
export class AppComponent {
  title = 'myFlix-Angular-client';
  constructor(public dialog: MatDialog) {}

  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, { width: '280px' });
  }

  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, { width: '280px' });
  }
  openMoviesDialog(): void {
    this.dialog.open(MovieCardComponent, { width: '500px' });
  }
}
