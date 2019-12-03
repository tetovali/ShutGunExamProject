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

  users: User[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.users= this.data.tempUser;
  }

}
