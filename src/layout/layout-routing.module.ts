import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { NavbarComponent } from './navbar/navbar.component';
// import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path: "layout",
    children: [
    ],
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
