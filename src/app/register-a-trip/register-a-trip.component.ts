import { LiftActions } from './../find-a-lift/lift-actions';
import { AuthService } from './../auth/auth.service';
import { DataService } from './../data.service';
import { User } from './../entities/user';
import { AuthGuard } from './../auth/auth.guard';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from './../entities/trip';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../redux/store';

@Component({
  selector: 'app-register-a-trip',
  templateUrl: './register-a-trip.component.html',
  styleUrls: ['./register-a-trip.component.scss']
})
export class RegisterATripComponent implements OnInit {

  registerTripForm: FormGroup;
  public isLoading: boolean;

  constructor(private fb: FormBuilder, private router: Router, private data: DataService,
    private auth: AuthService, private liftActions: LiftActions, private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
    this.registerTripForm = this.fb.group({
      "origin": ['', Validators.required],
      "destination": ['', Validators.required],
      "availableSeats": ['', Validators.required],
      "departureTime": ['', Validators.required]
    });

    this.ngRedux.select(x => x.trips).subscribe(state => {
      this.isLoading = state.isLoading;
    });
  }

  public onRegisterTripClick() : void {
    console.log(this.registerTripForm);

    if(this.registerTripForm.valid){
      let trip = this.registerTripForm.value as Trip;
      trip.owner = this.auth.loggedInUser;

      // this.data.addTrip(trip);
      //this.router.navigate(['/portal/findalift']);
      this.liftActions.createTrip(trip);

    }else{
      console.log("Can't. Must fix form errors first.")
    }
  }

}


