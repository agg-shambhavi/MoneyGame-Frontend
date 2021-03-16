import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTransactionsComponent } from './pages/all-transactions/all-transactions.component';
import { BuyPageComponent } from './pages/buy-page/buy-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PortfolioComponent } from "./pages/portfolio/portfolio.component"
import { UserInfoComponent } from './pages/user-info/user-info.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'all-transactions', component: AllTransactionsComponent},
    {path: 'buy', component: BuyPageComponent},
    {path: 'userinfo', component: UserInfoComponent}
  ],
},
{path: 'landing', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
