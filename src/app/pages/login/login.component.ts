import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../User/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router : Router) { }

  model = {
    email : '',
    password : ''
  };

  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  serverErrorMessages : string;

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['jwtToken']);
        this.router.navigateByUrl('/dashboard/portfolio');
      },
      err => {
        this.serverErrorMessages = err.error.message ;
      }
    )
  }

}
