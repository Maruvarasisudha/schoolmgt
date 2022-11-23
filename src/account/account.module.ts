import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutRoutingModule } from './../layout/layout-routing.module';
import { NavbarComponent } from 'src/layout/navbar/navbar.component';
import { FooterComponent } from 'src/layout/footer/footer.component';
import { CourseComponent } from './course/course.component';
import { NewsComponent } from './news/news.component';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    SignupComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    CourseComponent,
    NewsComponent
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
