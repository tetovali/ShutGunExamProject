import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin/admin.service';
import { AuthService } from '../auth/auth.service';
import { ApiService } from '../api.service';
import { User } from '../entities/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  updateForm: FormGroup;

  @Input() user: User;

  minDate = new Date(1920, 0, 1);
  maxDate = new Date(2001, 11, 31);

  constructor(private fb: FormBuilder, private router: Router, private admin: AdminService, private auth: AuthService,
    private apiService: ApiService) { }

  ngOnInit() {

    this.updateForm = this.fb.group({
      "firstname": [this.user.firstname, [Validators.required, Validators.minLength(3)]],
      "lastname": [this.user.lastname, Validators.required],
      "email": [this.user.email, [Validators.required, Validators.email]],
      "password": [this.user.password, [Validators.required, Validators.minLength(5)]],
      "city": [this.user.city, Validators.required],
      "birthDate": [this.user.birthDate, Validators.required],
      "phoneNumber": [this.user.phoneNumber, Validators.required],
      "driversLicense": [this.user.driversLicense],
      "locationOfEducation": [this.user.locationOfEducation, [Validators.required]]
    });
  }

   public onUpdateClick() {
     if(this.updateForm.valid) {
      let userApi = this.updateForm.value as User;
      userApi._id = this.user._id;
      this.apiService.updateUser(userApi).subscribe(( userObject: User) => { 
        this.router.navigateByUrl('/user', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/portal/userlist']);          
      });
      console.log("Hi. Updated!!!");
    }); 
     } else {
        console.log("Can't. Must fix form errors first");
     }
  }


}
