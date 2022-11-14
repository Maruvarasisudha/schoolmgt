import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    HomeComponent,
    SignupComponent,
    LoginComponent,
    AboutComponent
   
  ],
  imports: [
    CommonModule,
   
    FormsModule,
    ReactiveFormsModule
    
    
  ]
})
export class AccountModule { }
