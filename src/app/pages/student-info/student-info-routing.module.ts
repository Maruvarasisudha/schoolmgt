import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';


const routes: Routes = [
  {
    path: "student-info",
    children: [{
      path:'student-attendance',component:StudentAttendanceComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentInfoRoutingModule { }
