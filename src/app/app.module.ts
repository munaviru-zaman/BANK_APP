import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteaccountComponent } from './deleteaccount/deleteaccount.component';
import { DirectivesDirective } from './directives.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterComponent,
    LandingPageComponent,
    DashboardComponent,
    CreditCardComponent,
    DeleteaccountComponent,
    DirectivesDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
