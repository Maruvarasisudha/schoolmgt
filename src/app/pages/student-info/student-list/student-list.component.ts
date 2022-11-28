import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
interface Stand {
  value: string;
  viewValue: string;
}
interface Sec {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  name: string;
  position: number;
  admissionno: number;
  rollNo : number ;
  class:string;
  fathername:string;
  dateofbirth: number ;
  gender:string;
  type:string;
  phone:number;
  // weight: number;
  // symbol: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'mani',  admissionno:84023, rollNo: 10 ,  class:"b", fathername:"perumal",dateofbirth:12, gender:"female", type:"mmm",
  phone:12456378},
  {position: 2, name: 'Arasi',  admissionno:84023, rollNo: 10 ,  class:"b", fathername:"pethaperumal",dateofbirth:12, gender:"female", type:"mmm",
  phone:12456378},
  {position: 3, name: 'maruvarasi',  admissionno:84023, rollNo: 10 ,  class:"b", fathername:"peru",dateofbirth:12, gender:"female", type:"mmm",
  phone:12456378},
 
 
];

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})

export class StudentListComponent implements OnInit {
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
  @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(private fb: FormBuilder,
    private route: Router,
    private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.studentForm = this.fb.group({
      class: ['', Validators.required],
      section: ['', Validators.required],

    })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.studentForm.controls;
  }
  onSubmit() {
    this.Submitted = true;
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['position', ' admissionno', 'rollNo', 'name',' class','fathername', 'dateofbirth','gender','type','phone','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);



  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
