import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackTalkService {

  constructor(private http: HttpClient) { }
    
  newUser(usuario: any): Observable<any> {
    const url = 'api/login';
    return this.http.post<any>(url, usuario);
    }

  addUser(usuario: any): Observable<any> {
    const url = 'api/register';
    return this.http.post<any>(url, usuario);
    }
    
}
