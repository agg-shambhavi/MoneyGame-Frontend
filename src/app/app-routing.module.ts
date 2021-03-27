import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTransactionsComponent } from './pages/all-transactions/all-transactions.component';
import { BuyPageComponent } from './pages/buy-page/buy-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { PortfolioComponent } from "./pages/portfolio/portfolio.component"
import { SignupComponent } from './pages/signup/signup.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: 'portfolio', component: PortfolioComponent},
    {path: '', component: PortfolioComponent},
    {path: 'all-transactions', component: AllTransactionsComponent},
    {path: 'buy', component: BuyPageComponent},
    {path: 'userinfo', component: UserInfoComponent}
  ],
},
{path: 'landing', component: LandingPageComponent},
{path: 'login', component: LoginComponent},
{path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
