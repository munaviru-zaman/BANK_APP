import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'credit-card', component: CreditCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
