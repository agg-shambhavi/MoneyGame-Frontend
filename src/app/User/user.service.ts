import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
}
