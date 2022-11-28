import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginForm!: FormGroup;
  public Submitted = false;
  error = '';


  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public toastr: ToastrService,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      // id: [''],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })

  }
  ngAfterViewInit() {
  }

  get f() {
    return this.loginForm.controls;
  }
  submit() {
    console.log(this.loginForm.value)
    this.Submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authenticationService.login(this.loginForm.value).subscribe(res => {
      console.log(res)
      localStorage.setItem('currentUser', JSON.stringify(res));
      console.log(JSON.parse(localStorage.getItem('currentUser') || '{}'))
      localStorage.setItem('token', res.data.jwt);
      console.log(localStorage.getItem('token'))
      this.router.navigate(['/pages/dashboard']);

    })
  }
}

