import { Router } from '@angular/router';
import { ApiService } from './../api.service';
import { User } from './../entities/user';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  value = 'Clear me';

  private users: User[];

  constructor(private data: DataService, private apiService: ApiService, private router: Router) { 
    this.users = [];
  }

  ngOnInit() {
    this.apiService.getAllUsers().subscribe((result: any[]) => {
      const myUsers = result.filter( x => x.localFilter === 'kalkanApi');
      console.log(myUsers);
      this.users = myUsers;
    });
    //this.users= this.data.tempUser;
  }

}
