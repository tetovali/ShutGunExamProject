import { AdminService } from './../admin/admin.service';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  //Dependency Injection
  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService, private admin: AdminService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      "username": ['', [Validators.required, Validators.minLength(3)]],
      "password": ['', Validators.required]

    })
  }

  public onLoginClick()  : void {
    console.log(this.loginForm);

    //If this form is valid, then call the server.
    if(this.loginForm.valid) {
      //Then call the server
      //If login successful
      // this.auth.login().subscribe(result => {
      // this.router.navigate(['portal']);  
      
      if (this.loginForm.value.username === "admin") {
          this.admin.login().subscribe(result => {
          this.router.navigate(['home/login/useradmin']);  
          }); 
      } else {
          this.auth.login().subscribe(result => {
          this.router.navigate(['portal']); 
        }); 
      }
      
    } else {
      console.log("Can't. Must fix form errors first.");
    }
  }

}
