import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
// import { LayoutModule } from '@angular/cdk/layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NavbarsComponent } from './navbars/navbars.component';
import { LayoutModule } from 'src/layout/layout.module';
import { SidebarComponent } from 'src/layout/sidebar/sidebar.component';

@NgModule({
  declarations: [
    NavbarsComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ]
})
export class PagesModule { }
