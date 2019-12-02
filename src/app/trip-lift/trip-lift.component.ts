import { DataService } from './../data.service';
import { Trip } from './../entities/trip';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trip-lift',
  templateUrl: './trip-lift.component.html',
  styleUrls: ['./trip-lift.component.scss']
})
export class TripLiftComponent implements OnInit {

  @Input() trip: Trip;
  @Output() tripDeleteEmitter: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  onDeleteLift(id: string){
    this.tripDeleteEmitter.emit(id);
  }

}
