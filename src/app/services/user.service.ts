import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 

  }

  getUsers(): Observable<User[]> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<User[]>(url);
  }
  
//  getUsersPromise(): Promise<User[]> { 
//    const url = 'https://jsonplaceholder.typicode.com/users';
//    return this.http.get<User[]>(url).toPromise();
//  }

//ES IGUAL QUE EL DE arriba, lo único, que cambia su estructura para hacerlo más limpio
   getUsersPromise(): Promise<User[]> {     
     const url = 'https://jsonplaceholder.typicode.com/users';
     return firstValueFrom(this.http.get<User[]>(url));
   }

}



