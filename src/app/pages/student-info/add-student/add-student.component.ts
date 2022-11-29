import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';
import * as $ from "jquery";
import {  ViewChild, ElementRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddParentsComponent } from './../add-parents/add-parents.component';
import { StudentListService } from '../student-list.service';

var filename:any
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
interface bloodGroup {
  value: string;
  viewValue: string;
}
interface religions {
  value: string;
  viewValue: string;
}
interface cate {
  value: string;
  viewValue: string;
}
interface routelist {
  value: string;
  viewValue: string;
}

interface routelist {
  value: string;
  viewValue: string;
}
interface routelist {
  value: string;
  viewValue: string;
}
interface vihiecleno{
  value: string;
  viewValue: string;
}
interface  dormitory{
  value: string;
  viewValue: string;
}
interface  roomno {
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
  // @ViewChild('fileInput') fileInput: ElementRef ;
  // fileAttr = 'Choose File';
  // uploadFileEvt(imgFile: any) {
  //   if (imgFile.target.files && imgFile.target.files[0]) {
  //     this.fileAttr = '';
  //     Array.from(imgFile.target.files).forEach((file: any) => {
  //       this.fileAttr += file.name + ' - ';
  //     });
  //     // HTML5 FileReader API
  //     let reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       let image = new Image();
  //       image.src = e.target.result;
  //       image.onload = (rs) => {
  //         let imgBase64Path = e.target.result;
  //       };
  //     };
  //     reader.readAsDataURL(imgFile.target.files[0]);
  //     // Reset if duplicate image uploaded again
  //     this.fileInput.nativeElement.value = '';
  //   } else {
  //     this.fileAttr = 'Choose File';
  //   }
  // }
  routeList= [
    { value: 'TRANSPORT ROUTE 11-0', viewValue: 'TRANSPORT ROUTE 11' },
    { value: 'TRANSPORT ROUTE 15-1', viewValue: 'TRANSPORT ROUTE 15' },
    { value: 'TRANSPORT ROUTE 21-2', viewValue: 'TRANSPORT ROUTE 21' },

  ];
  vehicleNo = [
    { value: 'TN4914-0', viewValue: 'TN4914' },
    { value: 'TN4917-1', viewValue: 'TN4917' },
    
  ];
  dormitoryName = [
    { value: '1-st class-0', viewValue: 'SIR ISAAC NEWTON HOSTEL' },
    { value: '2-nd class-1', viewValue: 'LOUSIS PASTEUR  HOSTEL' },
    { value: 'GARLILEEO HOSTEL-2', viewValue: 'GARLILEEO HOSTEL' },

  ];
  roomNo= [
    { value: 'ROOM NO-124-0', viewValue: 'ROOM NO-124' },
    

  ];
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
  academicYearId = [
    { value: '2020-0', viewValue: '2020' },
    { value: '2021-1', viewValue: '2021' },
    { value: '2022-2', viewValue: '2022' },

  ];
  religions: religions[] = [
    { value: 'Hindu-0', viewValue: 'Hindu' },
    { value: 'muslim-1', viewValue: 'muslim' },
    { value: 'Others-2', viewValue: 'Others' },

  ];
  bloodGroup: bloodGroup[] = [
    { value: 'A+-0', viewValue: 'A+' },
    { value: 'O+-1', viewValue: 'O+' },
    { value: 'B+-2', viewValue: 'B+' },
    { value: 'AB+-3', viewValue: 'AB+' },
    { value: 'A--4', viewValue: 'A-' },
    { value: 'O--5', viewValue: 'O-' },
    { value: 'B-6', viewValue: 'B-' },
    { value: 'AB-7', viewValue: 'AB-' },

  ];
  cate: cate[] = [
    { value: 'Normal-0', viewValue: 'Normal' },
    { value: 'OPPOSITIONAL DEFIANT DISORDER-1', viewValue: 'Normal' },
    { value: 'ANXIETY DISORDER-2', viewValue: 'OPPOSITIONAL DEFIANT DISORDER' },
    { value: 'CONDUCT DISORDER-3', viewValue: 'ANXIETY DISORDER' },
    { value: 'OBSESSIVE COMPULSIVE  DISORDER -4', viewValue: 'OBSESSIVE COMPULSIVE  DISORDER' },
    { value: 'ATTENTION DEFICIT HYPERACTIVITY DISORDER-5', viewValue: 'ATTENTION DEFICIT HYPERACTIVITY DISORDER' },
    

  ];
  constructor(private fb: FormBuilder,
    private route: Router,
    private router: ActivatedRoute,
    private dialog:MatDialog,
    private service: StudentListService
    ) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group ({
    class: ['', Validators.required],
    
      firstName:['', Validators.required],
      gender:['', Validators.required],
      dateOfBirth:['', Validators.required],
      bloodGroup:['', ],
      religion:['',],
      Category:[''],
      academicYearId:['',Validators.required],
      guardianno:['',Validators.required],
      routeList:['', ],
      dormitoryName :['',],
      vehicleNo:[''],
      roomno:[''],
      
      bankName:[''],
      birthCertificateNo:[],
      bankAccountNo:[],
      casteId:[''],
      emailAddress:[''],
      fatherName:[''],
      fatherOccupation:[''],
      fatherPhoneNo:[''],
      fatherPhoto:[''],
      guardianAddress:[''],
      guardianEmail:[''],
      guardianOccupation:[''],
      guardianPhone:[''],
      guardianPhoto:[''],
      gurdianName:[''],
      height:[''],
      id:[''],
      lastName:[''],
      motherName:[''],
      motherOccupation:[''],
      motherPhoneNo:[''],
      motherPhoto:[''],
      weight:[''],
      photoFileName:[''],
      previousSchoolDetails:[''],
      relationwithGuardian:[''],
      rollNumber:[''],
      roomNo:[''],
      sectionId:['',Validators.required],
      stuAddressLine1:['',],
      stuAddressLine2:['',],
      nationalIdNo:['']
     } )
  
  }
 

  get f(): { [key: string]: AbstractControl } {
    return this.studentForm.controls;
  }
  onSubmit() {
    
    this.Submitted = true;
    console.log(this.studentForm.value)
if( this.studentForm.invalid){
return;
}
else{
  this.service.createstudent(this.studentForm.value).subscribe((_res) => {
    
  });
}

  }
  openDialog(){
    this.dialog.open(AddParentsComponent, {
      width: '500px',
      
      panelClass: 'my-dialog',
      
    });
}
 
}


