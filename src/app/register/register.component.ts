import { AuthService } from './../auth/auth.service';
import { AdminService } from './../admin/admin.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  minDate = new Date(1920, 0, 1);
  maxDate = new Date(2001, 11, 31);

  constructor(private fb: FormBuilder, private router: Router, private admin: AdminService, private auth: AuthService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      "firstname": ['', [Validators.required, Validators.minLength(3)]],
      "lastname": ['', Validators.required],
      "email": ['', [Validators.required, Validators.email]],
      "password": ['', [Validators.required, Validators.minLength(5)]],
      "city": ['', Validators.required],
      "birthDate": ['', Validators.required],
      "phoneNumber": ['', Validators.required],
      "driversLicense": [''],
      "locationOfEducation": ['', [Validators.required]] 
    })
  }

  public onRegisterClick()  : void {
    console.log(this.registerForm);

    //If this form is valid, then call the server.
    if(this.registerForm.valid) {
      //Then call the server
      if (this.registerForm.value.firstname === "admin") {
        this.admin.login().subscribe(result => {
          this.router.navigate(['adminportal']);  
        }); 
      } else {
        this.auth.login().subscribe(result => {
          this.router.navigate(['home/login'])  
        });  
      }
      
    } else {
      console.log("Can't. Must fix form errors first");
    }
  }

}
