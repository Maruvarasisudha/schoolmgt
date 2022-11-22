import { Component, OnInit,AfterViewInit , ViewChild,ViewEncapsulation  } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router ,ActivatedRoute,Route} from '@angular/router'; 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


export interface PeriodicElement {
  name: string;
  position: number;
 
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen'},
  {position: 2, name: 'Helium'},


];

@Component({
  selector: 'app-student-group',
  templateUrl: './student-group.component.html',
  styleUrls: ['./student-group.component.scss']
})
export class StudentGroupComponent implements AfterViewInit {
  groupform!: FormGroup;
  public submitted = false;
  


  displayedColumns: string[] = ['position', 'name','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private fb: FormBuilder,
  ) {
    this.groupform = this.fb.group({
      group: ['',Validators.required],
    });
   }
  

  ngAfterViewInit(): void {  
    this.dataSource.paginator = this.paginator;
  }


  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  onsubmit() {
    
    this.submitted = true;
    if (this.groupform.invalid) {
      return;
    }

    if (this.groupform.value != '') {
      console.log(this.groupform.value)

    }
  }
    
}













