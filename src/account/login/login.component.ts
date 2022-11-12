import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  public Submitted = false;
  constructor(private fb: FormBuilder,
    private route : ActivatedRoute,
    private router :Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
    
      email: ['' ,Validators.required],
      password: ['' ,Validators.required]
      
  })
  }
  
  get f(){
    return this.loginForm.controls;
  }
  submit() {
    this.Submitted = true;
    if(this.loginForm.invalid){
      return ;

}
console.log(this.loginForm.value)
}
}
