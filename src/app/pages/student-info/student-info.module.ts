import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentInfoRoutingModule } from './student-info-routing.module';
import { StudentAttendanceReportComponent } from './student-attendance-report/student-attendance-report.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { StudentGroupComponent } from './student-group/student-group.component';
import { MaterialModule } from 'src/app/material/material.module';
@NgModule({
  declarations: [
    StudentAttendanceReportComponent,
    StudentGroupComponent
  ],
  imports: [
    CommonModule,
    StudentInfoRoutingModule, 
    ReactiveFormsModule,   
    FormsModule,
    MaterialModule,
  ]
})
export class StudentInfoModule { }
