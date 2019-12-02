import { LiftActions } from './../find-a-lift/lift-actions';
import { AuthService } from './../auth/auth.service';
import { DataService } from './../data.service';
import { User } from './../entities/user';
import { AuthGuard } from './../auth/auth.guard';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from './../entities/trip';

@Component({
  selector: 'app-register-a-trip',
  templateUrl: './register-a-trip.component.html',
  styleUrls: ['./register-a-trip.component.scss']
})
export class RegisterATripComponent implements OnInit {

  registerTripForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthGuard, private data: DataService,
    private authService: AuthService, private liftActions: LiftActions) { }

  ngOnInit() {
    this.registerTripForm = this.fb.group({
      "origin": ['', Validators.required],
      "destination": ['', Validators.required],
      "availableSeats": ['', Validators.required],
      "departureTime": ['', Validators.required]
    })
  }

  public onRegisterTripClick() : void {
    console.log(this.registerTripForm);

    if(this.registerTripForm.valid){
      let trip = this.registerTripForm.value as Trip;
      trip.owner = this.auth.loggedInUser;

      // this.data.addTrip(trip);
      this.router.navigate(['/portal/findalift'])

    }else{
      console.log("Can't. Must fix form errors first.")
    }
  }

}


