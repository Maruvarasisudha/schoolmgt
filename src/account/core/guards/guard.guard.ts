import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var currentUser:any = this.authenticationService.currentUser();
      console.log(currentUser)
      console.log(route)
      if (currentUser) {
        console.log(currentUser)
        // console.log(route.data['roles'])
        //   if(route.data['roles'] && route.data['roles'].indexOf(currentUser.data.loginObj.roleList[0].roleName) === -1){
        //     this.router.navigateByUrl('/dummy',{skipLocationChange: true});
        //     setTimeout(() => this.router.navigate(['/']),10);
        //     return false;
        //   }
      
    return true;
  }
  this.router.navigate(['/login']);
  return false;
}
}
