import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Voiture } from '../models/voiture';



@Injectable({
  providedIn: 'root'
})
export class VoituresService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    };

  constructor(private http: HttpClient) { }

   //  Fonction en cas d'erreur http
   handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
    // Get client-side error
    errorMessage = error.error.message;
    } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage)
  }

  apiUrl = "http://localhost:3000/voiture";

   // on déclare un fonction qui return la liste de Voiturex en tant qu'observable
   getAllVoitures() : Observable <Voiture[]> {
    return this.http.get<Voiture[]>(this.apiUrl).pipe(retry(1),catchError(this.handleError));
  }
  

  //Fonction pour retrouver un Voiture par son nom
  getVoitureByID (id: number): Observable <Voiture> {
    return this.http.get<Voiture>(this.apiUrl + '/' + id).pipe(retry(1), catchError(this.handleError));
  }

  // fonction pour ajouter un Voiture au tableau listeVoiturex
  addVoiture(Voiture: Voiture): Observable<Voiture> {
    return this.http.post<Voiture>(this.apiUrl ,Voiture).pipe(catchError(this.handleError));
   }

  //Fonction pour éditer un Voiture
  editVoiture(Voiture: Voiture) {
    return this.http.put<Voiture>(this.apiUrl + '/' + Voiture.id, Voiture, this.httpOptions).pipe(catchError(this.handleError))
  }


  // Fonction pour supprimer un Voiture du tableau listeVoiturex
  deleteVoiture(id: number): Observable <Voiture> {
    return this.http.delete<Voiture>(this.apiUrl + '/' + id).pipe(catchError(this.handleError))
  }
}
