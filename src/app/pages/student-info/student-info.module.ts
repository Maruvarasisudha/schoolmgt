import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StudentInfoRoutingModule } from './student-info-routing.module';
import { StudentAttendanceReportComponent } from './student-attendance-report/student-attendance-report.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { StudentGroupComponent } from './student-group/student-group.component';
import { MaterialModule } from 'src/app/material/material.module';
import { StudentListComponent } from './student-list/student-list.component';
import {MatSelectModule} from '@angular/material/select';
// import { NgSelectFilteringModule } from 'ng-select-filtering';
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
    StudentAttendanceReportComponent,
    StudentGroupComponent,
    StudentListComponent,
    AddStudentComponent
  ],
  imports: [
    CommonModule,
    StudentInfoRoutingModule, 
    ReactiveFormsModule,   
    FormsModule,
    MaterialModule,
    CommonModule,
    StudentInfoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,    
  ]
})
export class StudentInfoModule { }
