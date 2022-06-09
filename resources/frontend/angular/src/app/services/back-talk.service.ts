import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackTalkService {

  constructor(private http: HttpClient) { }
    
  addUser(usuario: any): Observable<any> {
    const url = 'api/register';
    return this.http.post<any>(url, usuario); 
  }

  loginUser(usuario: any): Observable<any> {
    const url = 'api/login';
    return this.http.post<any>(url, usuario);
  }

  logoutUser(usuario: any): Observable<any> {
    const url = 'api/logout'
    return this.http.post<any>(url, usuario);
  }

  updateUser(usuario:any):Observable<any>{
    const url = 'api/update-users'
    return this.http.post<any>(url, usuario);
  }
  getUser(){
    const url = 'api/user';
    return this.http.get<any>(url);
  }

  //Hacer nuevos servicios para acceder a las propiedades del usuario

}
