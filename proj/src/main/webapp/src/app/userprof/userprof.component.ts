import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userprof',
  templateUrl: './userprof.component.html',
  styleUrls: ['./userprof.component.css']
})
export class UserprofComponent implements OnInit {

  userId: number = 0;
  user: any = {};

  constructor(private route:ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get("id"));
    this.getUserById(this.userId);
  }

  getUserById(id: number): void{
    this.userService.getUserById(id).subscribe(
      (response: User) => {this.user = response},
      (error: HttpErrorResponse) => {alert(error);}
    );
  }

}
