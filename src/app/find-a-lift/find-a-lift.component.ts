import { DataService } from './../data.service';
import { Trip } from './../entities/trip';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LiftActions } from './lift-actions';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../redux/store';


@Component({
  selector: 'app-find-a-lift',
  templateUrl: './find-a-lift.component.html',
  styleUrls: ['./find-a-lift.component.scss']
})
export class FindALiftComponent implements OnInit {
  private isLift: boolean;
  private lifts: Trip[];

  value = 'Clear me';

  constructor(private dataService: DataService, private liftActions: LiftActions,
    private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
    //this.trips = this.dataService.tempData;
    this.ngRedux.select(x => x.trips).subscribe((state) => {
      this.isLift = state.isLift;
      this.lifts = state.lifts;
    });
  }

  onDeleteLift(id: string): void {
    // this.dataService.deleteTrip(id);
    this.liftActions.deleteTrip(id);
  }

  onTestClick(): void {
    // dispatch action by calling an action creator.
    this.liftActions.setType(true);
  }

}
