import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map,tap } from 'rxjs/operators';

import { toDos } from '../models/toDos.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ToDosService {

  private toDosUrl = 'api/toDos'; 

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private log(message: string){
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);
      // TODO: better job of transforming error for user consumption    
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.    
      return of(result as T);
    };
  }


  getTodos(): Observable<toDos[]> {
    return this.http.get<toDos[]>(this.toDosUrl)
      .pipe(
        tap(_ => this.log(`fetched heroes`)),
        catchError(this.handleError<toDos[]>('getHeroes', []))
      );
}

}
