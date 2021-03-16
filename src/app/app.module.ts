import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { AllTransactionsComponent } from './pages/all-transactions/all-transactions.component';
import { BuyPageComponent } from './pages/buy-page/buy-page.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PortfolioComponent,
    AllTransactionsComponent,
    BuyPageComponent,
    UserInfoComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
