import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../User/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {

  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  serverErrorMessages: string;
  
  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    this.userService.postUser(form.value).subscribe(
      res => {
        console.log("done");
        console.log(form.value);
      },
      err => {
        console.log("not done");
        console.log(form.value);
        this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    )
  }

}
