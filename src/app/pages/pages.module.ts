import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxLegendModule, IgxCalloutLayerModule, IgxDataChartInteractivityModule, IgxDataChartAnnotationModule, IgxNumberAbbreviatorModule, IgxDataChartCategoryCoreModule } from "igniteui-angular-charts";




@NgModule({
  declarations: [
   
  
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartCategoryCoreModule,
    IgxLegendModule,
    IgxCalloutLayerModule,
    IgxDataChartInteractivityModule,
    IgxDataChartAnnotationModule,
    IgxNumberAbbreviatorModule,
    BrowserAnimationsModule
  ]
})
export class PagesModule { }
