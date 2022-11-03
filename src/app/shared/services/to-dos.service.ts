import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { toDos } from 'src/app/tasks/models/toDos.model';


@Injectable({
  providedIn: 'root'
})
export class ToDosService {

  constructor(private http: HttpClient) { }

  getToDosPromiseAsync(): Promise<toDos[]> {  
    const toDosUrl = 'api/toDos';    
    return firstValueFrom(this.http.get<toDos[]>(toDosUrl));
  }
}