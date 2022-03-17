import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})
export class UseraddComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onUserAdd(addForm: NgForm): void{
    this.userService.addUser(addForm.value).subscribe(
      (response: User) => {console.log(response); this.router.navigateByUrl("/users")},
      (error: HttpErrorResponse) => {alert(error);}
    )
  }

}
