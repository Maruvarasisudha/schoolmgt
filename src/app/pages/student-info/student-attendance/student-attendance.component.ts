import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.scss']
})
export class StudentAttendanceComponent implements OnInit {
  classes: any
  sections: any


  constructor() { }

  ngOnInit(): void {
    this.classes = [
      '1st class',
      '2nd class',
      '3rd class',
      '4th class',
      '5th class',
    ];
    this.sections = [
      'A1',
      'A2',
      'B1',
      'B2',
      'C1',
      'C2',
    ]


  }

}

