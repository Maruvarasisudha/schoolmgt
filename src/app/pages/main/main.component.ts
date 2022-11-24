import { Component, OnInit } from '@angular/core';
interface SidenavTogle{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isSideNavCollapsed=false;
  screenWidth=0;
  
  constructor() { }

  ngOnInit(): void {
  }
  onToggleSideNav(data:SidenavTogle){
    this.screenWidth=data.screenWidth;
    this.isSideNavCollapsed=data.collapsed
  }

}
