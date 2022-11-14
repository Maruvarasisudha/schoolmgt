import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountModule } from 'src/account/account.module';
import { AccountRoutingModule } from './../account/account-routing.module';

// import { HomeComponent } from './../account/home/home.component';
// import { AboutComponent } from './../account/about/about.component';

const routes: Routes = [
  // {path:"",component: HomeComponent },
  // {path:"about",component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AccountModule,AccountRoutingModule],
  exports: [RouterModule,AccountModule,AccountRoutingModule]
})
export class AppRoutingModule { }
