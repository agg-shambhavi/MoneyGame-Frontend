import { Component, OnInit,  ViewEncapsulation } from '@angular/core';
import { UserService } from 'src/app/User/user.service';
import { Router } from '@angular/router';

export interface portfolioDataS{
  stock_symbol : string;
  qty : number;
  eod_price : number;
} 

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .card.disabled {
      opacity: 0.5;
    }
  `]
})
export class PortfolioComponent implements OnInit {

  portfolioData ;
  DATA : portfolioDataS[] = [];

  constructor(public userService : UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUserPortfolio().subscribe(
      res => {
        this.portfolioData = res;
        this.DATA  = this.portfolioData;
        console.log(this.portfolioData);
      },
      err => {}
    );
  }
  displayedColumns : string[] = ['Stock Symbol', 'Quantity',  'Current_price' ];
}


