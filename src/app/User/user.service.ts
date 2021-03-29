import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User = {
    first_name: '',
    last_name: '',
    user_email: '',
    user_password: ''
  };

  constructor(private http: HttpClient) {

  }

  postUser(user_info: User){
    return this.http.post(environment.apiBaseUrl + '/auth/register',user_info)
  };

  login(authCredentials){
    return this.http.post(environment.apiBaseUrl + '/auth/login', authCredentials);
  }

  setToken(token : string){
    localStorage.setItem('token', token);
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

  // getUserPayload(){
  //   var token = localStorage.getItem('token');
  //   if (token){
  //     var userPayload = atob(token).split('.')[1];
  //     return JSON.parse(userPayload);
  //   }
  //   else{
  //     return null;
  //   }
  // }

  isLoggedIn(){
    var token = localStorage.getItem('token');
    if (!token){
      // code to check the expiration time
      console.log("no token")
      return false;
    }
    return true;
  }

}
