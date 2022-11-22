import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAttendanceReportComponent } from './student-attendance-report/student-attendance-report.component';
import { StudentGroupComponent } from './student-group/student-group.component';

const routes: Routes = [
  {
    path: "student-info",
    children: [
      {path:"attendancereport",component:StudentAttendanceReportComponent},
      {path:"studentgroup",component:StudentGroupComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentInfoRoutingModule { }
