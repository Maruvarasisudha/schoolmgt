import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInfoRoutingModule } from './student-info-routing.module';
import { StudentAttendanceReportComponent } from './student-attendance-report/student-attendance-report.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { StudentGroupComponent } from './student-group/student-group.component';
import { MaterialModule } from 'src/app/material/material.module';
import { StudentListComponent } from './student-list/student-list.component';
import { NgSelectModule } from "@ng-select/ng-select";
import { AddStudentComponent } from './add-student/add-student.component';
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
