import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead';
import {merge, Observable, OperatorFunction, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, elementAt, filter, map} from 'rxjs/operators';
import { stockPriceClass, transactionClass, UserService } from '../../User/user.service';

@Component({
  selector: 'app-sell-page',
  templateUrl: './sell-page.component.html',
  styleUrls: ['./sell-page.component.scss']
})
export class SellPageComponent implements OnInit {

  sellStocks : string[];
  result;
  model = new transactionClass("", "2021-02-18", 0);
  stockprice : stockPriceClass;
  current_price : number;

  constructor(private userService: UserService, private router : Router) { }

  ngOnInit(): void {
  this.userService.getSellStocks().subscribe(
    res => {
      this.result = res;
      this.sellStocks = this.result.map( function (element) {return element.stock_symbol})
      console.log(this.sellStocks);
    },
    err => {
      console.log("Error in fetching sell stocks");
    }
  )
  }

  // search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
  //   text$.pipe(
  //     debounceTime(200),
  //     distinctUntilChanged(),
  //     map(term => term.length < 2 ? []
  //       : this.sellStocks.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  //   )

  @ViewChild('instance', {static: true}) instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.sellStocks
        : this.sellStocks.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }


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
      this.userService.postsell(this.model).subscribe(
        res => {
          console.log("success") ;
          this.router.navigateByUrl('/dashboard/all-transactions');
        },
        err => {
          console.log("error") ;
        }
      )
    }

  

}
