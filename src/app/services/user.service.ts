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
    const url = 'api/users';
    return this.http.get<User[]>(url);
  }
  
  getUsersPromise(): Promise<User[]> { 
    const url = 'api/users';
    return firstValueFrom(this.http.get<User[]>(url));
  }

   getUsersPromiseAsync(): Promise<User[]> {     
     const url = 'api/users';
     return firstValueFrom(this.http.get<User[]>(url));
   }

}



