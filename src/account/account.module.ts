import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutRoutingModule } from './../layout/layout-routing.module';
import { NavbarComponent } from 'src/layout/navbar/navbar.component';
import { FooterComponent } from 'src/layout/footer/footer.component';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    SignupComponent,
    LoginComponent,
    AboutComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class AccountModule { }
