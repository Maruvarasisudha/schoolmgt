import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup,FormBuilder, Validators,AbstractControl} from '@angular/forms';
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
  weight: number;
  symbol: string;
}

  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},



  ];
@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.scss']
})
export class StudentAttendanceComponent implements OnInit {
  studentattendanceForm!: FormGroup;
  public Submitted = false;
  obj: any = {};



  stand: Stand[] = [
    { value: 'First class ', viewValue: 'First class'},
    { value: 'Second class', viewValue: 'Second class'},
    { value: 'Third class', viewValue: 'Third class'},
    { value: 'Forth class', viewValue: 'Forth class'},
];
  sec: Sec[] = [
  { value: 'A section', viewValue: 'A section' },
  { value: 'B section', viewValue: 'B section' },
  { value: 'C section', viewValue: 'C section' },
  { value: 'D section', viewValue: 'D section' },
];
@ViewChild (MatPaginator) paginator!: MatPaginator;



 constructor(private fb: FormBuilder,
    private route: Router,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.studentattendanceForm = this.fb.group ({
      class: ['', Validators.required],
      section: ['', Validators.required],
    })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.studentattendanceForm.controls;
  }

  onSubmit() {
    this.Submitted = true;
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);




  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }




}

