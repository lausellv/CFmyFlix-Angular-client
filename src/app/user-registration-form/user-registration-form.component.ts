import { Component, OnInit, Input } from '@angular/core';
//API call
import { FetchApiDataService } from '../fetch-api-data.service';
//closes dialog
import { MatDialogRef } from '@angular/material/dialog';
//display notification to client
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss'],
})
export class UserRegistrationFormComponent implements OnInit {
  isLoading = false;

  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  registerUser(): void {
    this.isLoading = true;
    this.fetchApiData.userRegistration(this.userData).subscribe(
      (result) => {
        this.isLoading = false;
        this.dialogRef.close();
        console.log (result)
        this.snackBar.open('Registration complete, please login', 'Ok', {
          duration: 2000,
        });
      },
      (result) => {
        console.log(result)
        this.isLoading = false;
        this.snackBar.open(result, 'Ok', {
          duration: 2000,
        });
      }
    );
  }
}
