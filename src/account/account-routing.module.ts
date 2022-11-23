import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { CourseComponent } from './course/course.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      {path:'news',component:NewsComponent},
      {path:'course',component:CourseComponent},
    ]
  },
  { path: 'login', component: LoginComponent },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
