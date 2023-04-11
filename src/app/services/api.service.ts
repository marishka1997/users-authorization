import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Params } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
  }
  getUsersID(id: Params): Observable<User> {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id["id"]}`);
  }
  delete(id:number){
    return this.http.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
