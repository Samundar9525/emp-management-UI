import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userLogged = new BehaviorSubject('Login')
  constructor(private http: HttpClient,) { }

  userLogin(data:any):Observable<any> {
    let url = 'api/login/accounts/'
    return this.http.post(url,data);
  }
}
