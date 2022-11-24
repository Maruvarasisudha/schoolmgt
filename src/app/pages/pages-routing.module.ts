import {  NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from 'src/account/core/guards/guard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { BodyComponent } from './body/body.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: "pages",component: MainComponent,
    children: [
      { path: "", redirectTo:'dashboard',pathMatch:'full'},
      { path: "dashboard", component: DashboardComponent },
      { path: "body", component: BodyComponent },

    ],
   canActivate:[GuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
