import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AllTransactionsComponent } from './pages/all-transactions/all-transactions.component';
import { BuyPageComponent } from './pages/buy-page/buy-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { PortfolioComponent } from "./pages/portfolio/portfolio.component"
import { SellPageComponent } from './pages/sell-page/sell-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';

const routes: Routes = [


{path: 'landing', component: LandingPageComponent},
{path: '',  redirectTo: '/landing', pathMatch: 'full' },
{path: 'login', component: LoginComponent},
{path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate : [AuthGuard] ,children: [
    // {path: '/', redirectTo: 'portfolio', component: PortfolioComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'all-transactions', component: AllTransactionsComponent},
    {path: 'buy', component: BuyPageComponent},
    {path: 'sell', component: SellPageComponent},
    {path: 'userinfo', component: UserInfoComponent}
  ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
