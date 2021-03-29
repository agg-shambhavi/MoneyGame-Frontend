import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/User/user.service';

export interface allTransactions{
  stock_symbol : string;
  stock_name : string;
  transaction_date : Date;
  transaction_type : string;
  abs : number;
  eod_price : number;
} 

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.scss']
})


export class AllTransactionsComponent implements OnInit {

  allTransactionDetails ;
  ELEMENT_DATA : allTransactions[] = [];

  constructor(public userService : UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUserTransactions().subscribe(
      res => {
        this.allTransactionDetails = res;
        this.ELEMENT_DATA  = this.allTransactionDetails;
        console.log(this.allTransactionDetails);
      },
      err => {}
    );
  }

  displayedColumns : string[] = ['Stock Symbol', 'Stock Name', 'Transaction Type', 'Quantity', 'Transaction Price', 'Transaction Date' ];


}
