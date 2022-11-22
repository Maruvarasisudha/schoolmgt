import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ErrorInterceptor } from './interceptor/error.interceptor';

@NgModule({
  declarations: [
    HomeComponent,
    SignupComponent,
    LoginComponent
   
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
})
export class AccountModule { }
