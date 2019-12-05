import { Router } from '@angular/router';
import { ApiService } from './../api.service';
import { User } from './../entities/user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() userInput: User;
  @Output() userClicked: EventEmitter<any> = new EventEmitter<any>();

  isShown: boolean = false ; // hidden by default

  constructor(private apiService: ApiService, private router: Router) { 
  }

  ngOnInit() {
  }

  onUserClick(user: User) {
    this.userClicked.emit(user);
  }

  // updateClick() {
  //   // this.apiService.updateUser(this.userInput).subscribe((result: any[]) => {
  //   //   const myUsers = result.filter( x => x.localFilter === 'emirApi');
  //   //   console.log(myUsers);
  //   // }); 
  //   this.router.navigate(['/portal/updateuser']);
    
  // }

  deleteClick() {
    this.apiService.deleteUser(this.userInput._id).subscribe((result: any[]) => {
      const deletedUser = result.filter( x => x._id === this.userInput._id);
      console.log(deletedUser);
    });
    this.router.navigateByUrl('/user', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/portal/userlist']);
    }); 
  }  

  updateClick() {
    this.isShown = ! this.isShown;  
  }

}
 