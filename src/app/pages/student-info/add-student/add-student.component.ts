import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';
interface Stand {
  value: string;
  viewValue: string;
}
interface Sec {
  value: string;
  viewValue: string;
}
interface Gender {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  studentForm!: FormGroup;
  public Submitted = false;
  obj: any = {};

  
  stand: Stand[] = [
    { value: '1-st class-0', viewValue: '1-st class' },
    { value: '2-nd class-1', viewValue: '2-nd class' },

  ];
 
  sec: Sec[] = [
    { value: 'sec-A-0', viewValue: 'sec-A' },
    { value: 'sec-B-1', viewValue: 'sec-B' },

  ];
  sece: Gender[] = [
    { value: 'Female-0', viewValue: 'Female' },
    { value: 'Male-1', viewValue: 'Male' },
    { value: 'Others', viewValue: 'Others' },

  ];
  constructor(private fb: FormBuilder,
    private route: Router,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group ({
    class: ['', Validators.required],
      section: ['', Validators.required],
      firstName:['', Validators.required],
      gender:['', Validators.required],
      datePicker:['', Validators.required]
     } )
  
  }

  get f(): { [key: string]: AbstractControl } {
    return this.studentForm.controls;
  }
  onSubmit() {
    this.Submitted = true;
  }
}


