import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  };

  noAuthHeader = {headers: new HttpHeaders({"NoAuth":"True"})}
  constructor(public http: HttpClient) { }

  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register',user,this.noAuthHeader);
  }

  loginUser(authCredentials){
    return this.http.post(environment.apiBaseUrl+'/login',authCredentials,this.noAuthHeader);
  }
}
