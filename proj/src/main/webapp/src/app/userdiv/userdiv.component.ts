import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdiv',
  templateUrl: './userdiv.component.html',
  styleUrls: ['./userdiv.component.css']
})
export class UserdivComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this.userService.getUsers().subscribe(
      (response: User[]) => {this.users = response},
      (error: HttpErrorResponse) => {alert(error)}
    )
  }

}
