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
    const url = 'api/update-users' + usuario.id;
    return this.http.post<any>(url, usuario);
  }

  getUser(){
    const url = 'api/user';
    return this.http.get<any>(url);
  }

  createAdd(add:any):Observable<any>{
    const url = 'api/cAdd';
    return this.http.post<any>(url, add);
  }

  readAdd(){
    const url = 'api/rAdd';
    return this.http.get<any>(url);
  }

  updateAdd(add:any):Observable<any>{
    const url = 'api/uAdd' + add.id;
    return this.http.post<any>(url, add);
  }

  deleteAdd(id:any):Observable<any>{
    const url = 'api/dAdd' + id;
    console.log(id);
    return this.http.post<any>(url, id);
  }

  // En produccion

  // createFav(fav:any):Observable<any>{
  //   const url = 'api/cFav';
  //   return this.http.post<any>(url, fav);
  // }

  // readFav(fav:any):Observable<any>{
  //   const url = 'api/rFav';
  //   return this.http.get<any>(url, fav);
  // }

  // updateFav(fav:any):Observable<any>{
  //   const url = 'api/uFav';
  //   return this.http.post<any>(url, fav);
  // }

  // deleteFav(fav:any):Observable<any>{
  //   const url = 'api/dFav';
  //   return this.http.post<any>(url, fav);
  // }
}
