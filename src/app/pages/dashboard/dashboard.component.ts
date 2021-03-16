import { Component, OnInit } from '@angular/core';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { AllTransactionsComponent} from "../all-transactions/all-transactions.component";
import { BuyPageComponent } from "../buy-page/buy-page.component";
import { UserInfoComponent } from "../user-info/user-info.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fachart = faChartLine;

}
