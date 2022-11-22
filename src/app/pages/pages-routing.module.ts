import {  NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from 'src/account/core/guards/guard.guard';

import { NavbarsComponent } from './navbars/navbars.component';


const routes: Routes = [
  {
    path: "pages",
    children: [
      { path: "navbars", component: NavbarsComponent }
    ],
   canActivate:[GuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
