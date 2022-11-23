import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAttendanceReportComponent } from './student-attendance-report/student-attendance-report.component';
import { StudentGroupComponent } from './student-group/student-group.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { GuardGuard } from 'src/account/core/guards/guard.guard';

const routes: Routes = [
  {
    path: "student-info",
    children: [
      {path:"attendancereport",component:StudentAttendanceReportComponent},
      {path:"studentgroup",component:StudentGroupComponent},
      {path:"student-list",component:StudentListComponent},
      {path:"add-student",component:AddStudentComponent}
    ],
    //  canActivate:[GuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentInfoRoutingModule { }
