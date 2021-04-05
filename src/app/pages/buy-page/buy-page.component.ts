import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {nse_stocks} from '../../User/stocks';
import { transactionClass, stockPriceClass, UserService } from '../../User/user.service';



@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.scss']
})
export class BuyPageComponent implements OnInit {
  
  model = new transactionClass("", "2021-02-17", 0);
  stockprice : stockPriceClass;
  current_price : number;
  

  constructor(private userService: UserService, private router : Router) { }

  ngOnInit(): void {
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : nse_stocks.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

    updatePrice(){
      this.stockprice = new stockPriceClass(this.model.stock_symbol, this.model.date);
      this.userService.postStockPrice(this.stockprice).subscribe(
        res =>{
            this.current_price = res["eod_price"]
        },
        err => {
          console.log("Failed")
        }
      )  
    }

    onSubmit(){
      this.userService.postbuy(this.model).subscribe(
        res => {
          console.log("success") ;
          this.router.navigateByUrl('/dashboard/all-transactions');
        },
        err => {
          console.log("error") ;
        }
      )
    }

    // search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => text$.pipe(
    //   debounceTime(200),
    //   distinctUntilChanged(),
    //   filter(term => term.length >= 1),
    //   map(term => nse_stocks.filter(state => new RegExp(term, 'mi').test(this.stock_symbol)).slice(0, 10))
    // )

  

}
