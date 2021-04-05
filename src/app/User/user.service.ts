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

  getUserTransactions(){
    return this.http.get(environment.apiBaseUrl + '/transaction/all');
  }

  getUserPortfolio(){
    return this.http.get(environment.apiBaseUrl + '/dashboard/portfolio');
  }

  postStockPrice(stockSymbolDate : stockPriceClass){
    return this.http.post(environment.apiBaseUrl + '/util/stock_price',stockSymbolDate, this.noAuthHeader);
  }

  postbuy(buyDetails : transactionClass){
    return this.http.post(environment.apiBaseUrl + '/transaction/buy', buyDetails)
  }

  getSellStocks(){
    return this.http.get(environment.apiBaseUrl + '/dashboard/sell-stocks');
  }

  postsell(sellDetails : transactionClass){
    return this.http.post(environment.apiBaseUrl + '/transaction/sell', sellDetails)
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

export class stockPriceClass {
  constructor(
    public stock_symbol : string,
    public date : string,

  ) {  }
}

export class transactionClass {
  constructor(
    public stock_symbol : string,
    public date : string,
    public qty : number,
  ) {  }
  
}