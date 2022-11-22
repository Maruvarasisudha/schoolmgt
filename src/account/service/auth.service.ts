import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {
    private baseUrl=environment.API_URL;
    private loginUrl=this.baseUrl+"/auth/login";
    constructor(
        private http: HttpClient,
        private router: Router
    ) {
    }
        public currentUser() {
           return localStorage.getItem('currentUser');
        }
    
          //get token from interceptor
          public getToken() {
            return localStorage.getItem('token');
        } 
        login(data:any){
           return this.http.post<any>(this.loginUrl, data);
        }
        isLoggedIn(){
            const name= localStorage.getItem('currentUser');
            if(name){
              return true
            }
            else{ return false}
          }
        logout() {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('token');
            localStorage.removeItem('allowedPortArr');
            this.router.navigate(['/login']);
        }   
    }
