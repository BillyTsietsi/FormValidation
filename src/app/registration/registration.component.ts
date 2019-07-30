import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,Validator } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  
  title = 'FormValidation';
  FormValid

  rname:string='';
  rsurname:string='';
  rage:number = 0;
  remail:string='';
  rnumber: number = 0;
  emailPattern:string="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  reg = [];
  nameButton = false

  constructor(public formBuilder:FormBuilder) {

  this.FormValid= formBuilder.group({
  name:["", Validators.required],
  surname:["", Validators.required],
  age:["", Validators.required],
  email:["",Validators.pattern(this.emailPattern)],
  number:["", Validators.required],
  //email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]

  })

  }

  register(){
    this.nameButton = true
    this.reg.push({name:this.rname,surname:this.rsurname,age:this.rage,email:this.remail,number:this.rnumber})
    

  }

  
  onSubmit() {
    this.nameButton = true;

    // stop here if form is invalid
    if (this.FormValid.invalid) {
        return;
    }

    alert('SUCCESS!! :-)')
}


  ngOnInit() {
  }

}
