import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { StudentgroupService } from '../studentgroup.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


export interface PeriodicElement {
  
}
const ELEMENT_DATA: PeriodicElement[] = [
 
];

@Component({
  selector: 'app-student-group',
  templateUrl: './student-group.component.html',
  styleUrls: ['./student-group.component.scss']
})
export class StudentGroupComponent implements AfterViewInit,OnInit {
  groupform!: FormGroup;
  public submitted = false;
  paramId: any;
  grouplist: any;
  groupli:any
  displayedColumns: string[] = ['index','groupName','description', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private fb: FormBuilder,
    private studentgroup: StudentgroupService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.groupform = this.fb.group({
      id: [''],
      groupName: ['', Validators.required],
      description: [''],
    });
   
  }

  ngOnInit(): void {
    this.get()
  }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onsubmit() {

    this.submitted = true;
    if (this.groupform.invalid) {
      return;
    }
    console.log(this.groupform.value);
    
    this.studentgroup.studentgroup(this.groupform.value).subscribe(
      res => {
        console.log(res)
      })
      
  }
  get() {
    this.studentgroup.getstudentgroup().subscribe(
      res => {
        console.log(res)
        this.grouplist = res
        this.groupli =this.grouplist.data
      })
  }
  
  
}
// }















