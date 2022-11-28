import { Component, OnInit, Inject } from '@angular/core';
import {FormControl} from '@angular/forms';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddStudentComponent } from '../add-student/add-student.component';
interface sbilings {
  value: string;
  viewValue: string;
}
interface section {
  value: string;
  viewValue: string;
}

interface  std{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-parents',
  templateUrl: './add-parents.component.html',
  styleUrls: ['./add-parents.component.scss']
})
export class AddParentsComponent implements OnInit {
  disableSelect = new FormControl(false);
  studentForm!: FormGroup;
  public Submitted = false;
  obj: any = {};
  class:std[]= [
    { value: 'TRANSPORT ROUTE 11-0', viewValue: 'TRANSPORT ROUTE 11' },
    { value: 'TRANSPORT ROUTE 15-1', viewValue: 'TRANSPORT ROUTE 15' },
    { value: 'TRANSPORT ROUTE 21-2', viewValue: 'TRANSPORT ROUTE 21' },

  ];
  section :section[]= [
    { value: 'TN4914-0', viewValue: 'TN4914' },
    { value: 'TN4917-1', viewValue: 'TN4917' },
    
  ];
  sbilings :sbilings[]= [
    { value: '1-st class-0', viewValue: 'SIR ISAAC NEWTON HOSTEL' },
    { value: '2-nd class-1', viewValue: 'LOUSIS PASTEUR  HOSTEL' },
    { value: 'GARLILEEO HOSTEL-2', viewValue: 'GARLILEEO HOSTEL' },

  ];
  constructor(private fb: FormBuilder,
    private route: Router,
    private router: ActivatedRoute,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddParentsComponent>,
  ) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group ({
      class: ['', Validators.required],
        section: ['', Validators.required],
        sbilings:['', Validators.required],
        onNoClick(){
        
        }
    })

  }
  get f(): { [key: string]: AbstractControl } {
    return this.studentForm.controls;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
