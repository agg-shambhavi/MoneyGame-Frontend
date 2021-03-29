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

  noAuthHeader = { headers : new HttpHeaders({ 'NoAuth' : 'True' })};

  constructor(private http: HttpClient) {

  }

  // http method

  postUser(user_info: User){
    return this.http.post(environment.apiBaseUrl + '/auth/register',user_info, this.noAuthHeader)
  };

  login(authCredentials){
    return this.http.post(environment.apiBaseUrl + '/auth/login', authCredentials , this.noAuthHeader);
  }

  getUserProfile(){
    return this.http.get(environment.apiBaseUrl + '/dashboard/userinfo')
  }

  // Helper methods

  isLoggedIn(){
    var token = this.getToken();
    if (!token){
      console.log("no token")
      return false;
    }
    return true;
  }

  setToken(token : string){
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

  

}
