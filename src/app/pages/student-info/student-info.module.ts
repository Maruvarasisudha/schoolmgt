import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInfoRoutingModule } from './student-info-routing.module';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [

    StudentAttendanceComponent
  ],
  imports: [

    CommonModule,
    StudentInfoRoutingModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class StudentInfoModule { }
