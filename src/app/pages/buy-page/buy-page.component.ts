import { Component, OnInit } from '@angular/core';
import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {nse_stocks} from '../../User/stocks';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.scss']
})
export class BuyPageComponent implements OnInit {
  public stock_symbol: string;
  

  constructor() { }

  ngOnInit(): void {
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : nse_stocks.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

    // search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => text$.pipe(
    //   debounceTime(200),
    //   distinctUntilChanged(),
    //   filter(term => term.length >= 1),
    //   map(term => nse_stocks.filter(state => new RegExp(term, 'mi').test(this.stock_symbol)).slice(0, 10))
    // )

}
