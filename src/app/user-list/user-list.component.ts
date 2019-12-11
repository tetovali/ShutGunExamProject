import { Router } from '@angular/router';
import { ApiService } from './../api.service';
import { User } from './../entities/user';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../redux/store';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  value = 'Clear me';

  private isLift: boolean;
  private users: User[];

  constructor(private data: DataService, private apiService: ApiService, private router: Router, 
    private ngRedux: NgRedux<AppState>) { 
    this.users = [];
  }

  ngOnInit() {
    // this.apiService.getAllUsers().subscribe((result: any[]) => {    //APi
    //   const myUsers = result.filter( x => x.localFilter === 'kalkanApi');
    //   console.log(myUsers);
    //   this.users = myUsers;
    // });
    this.ngRedux.select(x => x.userList).subscribe((state) => {
      this.isLift = state.isUser;
      this.users = state.users;
    });
    //this.users= this.data.tempUser;
  }

}
