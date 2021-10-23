import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

import { MovieDirectorComponent } from '../movie-director/movie-director.component';
import { MovieGenreComponent } from '../movie-genre/movie-genre.component';
import { MovieSynopsisComponent } from '../movie-synopsis/movie-synopsis.component';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  favoriteMovies: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

    /**
   * Fetch all movies from DB
   * @returns All movies stored in the database
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      return this.movies;
    });
  }

    /**
   * Add or remove movies from the Favorites list
   * @param movieId
   */
  editFavoriteMovies(movieId: string): any {
    if (this.isFavorite(movieId)) {
      this.fetchApiData.deleteFavoriteMovie(movieId).subscribe((resp: any) => {
        this.snackBar.open('Removed from favorites!', 'OK', {
          duration: 2000,
        });
      });
      const index = this.favoriteMovies.indexOf(movieId);
      return this.favoriteMovies.splice(index, 1);
    } else {console.log(this.favoriteMovies
      );
      this.fetchApiData.addFavoriteMovie(movieId).subscribe((response: any) => {
        this.snackBar.open('Added to favorites!', 'OK', {
          duration: 2000,
        });console.log(this.favoriteMovies
          );
      });
    } console.log(this.favoriteMovies
      );
    return this.favoriteMovies.push(movieId);
  }

  ngOnInit(): void {
    this.getMovies();
  }
  /**
   * Open dialog to show movie genre through MovieGenreComponent
   * @param name
   * @param description
   */
  getGenre(name: string, description: string): void {
    this.dialog.open(MovieGenreComponent, {
      data: {
        Name: name,
        Description: description,
      },
    });
  }

  /**
   * Open dialog to show movie director through MovieDirectorComponent
   * @param name
   * @param bio
   * @param birth
   */
  getDirector(name: string,
    bio: string,
    birth: string): void {
    this.dialog.open(MovieDirectorComponent, {
      data: {
        Name: name,
        Bio: bio,
        Birth: birth
      }
    });
  }

    /**
   * Open dialog to show movie description through MovieDescriptionComponent
   * @param description
   */

  getDescription(description: string): void {
    this.dialog.open(MovieSynopsisComponent, {
      data: { Description: description },
    });
  }

   /**
   * Check for favorite movies
   * @param movieID
   */

  isFavorite(movieID: string): boolean {
    return this.favoriteMovies.includes(movieID);
  };
}
