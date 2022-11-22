import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StudentInfoRoutingModule } from './student-info-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { NgSelectFilteringModule } from 'ng-select-filtering';
import { NgSelectModule } from "@ng-select/ng-select";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AddStudentComponent } from './add-student/add-student.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    StudentListComponent,
    AddStudentComponent
  ],
  imports: [
    CommonModule,
    StudentInfoRoutingModule,
    MatFormFieldModule,
    MatInputModule ,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    NgSelectModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
  ]
})
export class StudentInfoModule { }
