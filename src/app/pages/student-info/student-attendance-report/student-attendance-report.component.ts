import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';



@Component({
  selector: 'app-student-attendance-report',
  templateUrl: './student-attendance-report.component.html',
  styleUrls: ['./student-attendance-report.component.scss']
})
export class StudentAttendanceReportComponent implements OnInit {
  formpage!: FormGroup;
  public submitted = false;
  ReadMore: boolean = true
  visible: boolean = false

  classes: any
  sections: any
  months: any
  years: any


  constructor(private fb: FormBuilder) {
    this.formpage = this.fb.group({
      class: ['', Validators.required],
      section: ['', Validators.required],
      month: [''],
      year: [''],
    });

  }

  ngOnInit(): void {
    this.classes = [
      'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'
    ];
    this.sections = [

      'A',
      'A1',
      'B',
      'B1',
      'C',
      'C1',
    ]
    this.months = [
      'January', ' February', 'March', 'April', ' May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]
    this.years = [
      2022, 2021,
      2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011,
      2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001,
      2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991,
      1990
    ]


  }
  get f() {
    return this.formpage.controls;
  }

  onsubmit() {
   
      console.log(this.formpage.value);

      this.ReadMore = !this.ReadMore;
      this.visible = !this.visible
    
  }

}





