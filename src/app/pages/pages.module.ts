import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from 'src/layout/layout.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentInfoModule } from './student-info/student-info.module';
import { MaterialModule } from '../material/material.module';
// import { SidebarComponent } from 'src/layout/sidebar/sidebar.component';
import { BodyComponent } from './body/body.component';
import { AlertModule,SidebarModule } from 'ng-cdbangular';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    DashboardComponent,
    // NavbarsComponent,
    // SidebarComponent,
    BodyComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
     PagesRoutingModule,
     ReactiveFormsModule,
     LayoutModule,
    FormsModule,
    StudentInfoModule,
    BrowserAnimationsModule,
    MaterialModule,
    // SidebarModule

  ]
})
export class PagesModule { }
