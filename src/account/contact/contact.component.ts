import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactform!:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.contactform=this.fb.group({
      name:[""],
      email:[""],
      subject:[""],
      message:[""]
    })
  }

  onsubmit(){
    console.log(this.contactform.value);
    
  }

}
