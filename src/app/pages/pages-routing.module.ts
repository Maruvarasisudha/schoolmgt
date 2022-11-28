import {  NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from 'src/account/core/guards/guard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';




const routes: Routes = [
  {
    path: "pages",
    children: [
      
      { path:"dashboard", component : DashboardComponent }
    ],
   canActivate:[GuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
