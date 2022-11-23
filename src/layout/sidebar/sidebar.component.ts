import { Component, OnInit, ViewEncapsulation, Inject, ViewChild  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../account/service/auth.service';

// import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
// import { Menu, MenuItemModel } from '@syncfusion/ej2-navigations';
// import { enableRipple } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  constructor(private authenticationService: AuthenticationService ,private router:Router) { }

  ngOnInit(): void {
    
  }
  logout() {
    console.log("logout")
    this.authenticationService.logout();
}
  

}
