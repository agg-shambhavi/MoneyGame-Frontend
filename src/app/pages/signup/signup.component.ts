import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../User/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  serverErrorMessages: string;
  
  constructor(public userService: UserService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    this.userService.postUser(form.value).subscribe(
      res => {
        this.userService.setToken(res['jwtToken']);
        this.router.navigateByUrl('/dashboard/portfolio');
      },
      err => {
        console.log("not done");
        console.log(form.value);
        this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    )
  }

}
