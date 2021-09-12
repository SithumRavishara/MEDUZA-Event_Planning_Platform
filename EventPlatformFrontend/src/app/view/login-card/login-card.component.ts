import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SendModel} from '../sign-card/sign-card.component';
import {UserService} from '../../service/user.service';
import { Router } from '@angular/router';
import {DataExchangeService} from "../../service/dataExchange.service";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {

  route = '';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private userService: UserService, private router: Router, private dataExchangeService: DataExchangeService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  getErrorMessage() {
    if (this.loginForm.controls.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.loginForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.loginForm.controls.password.hasError('required')) {
      return 'You must enter a value';
    }
    return this.loginForm.controls.password.hasError('minLength') ? 'Not a valid password.' : '';
  }

  send: SendLogModel = {
    email: '',
    password: '',
    role: '',
   }

  assignValuesForTheSendModel(logInForm) {
    console.log(logInForm.value.email);
    console.log(logInForm.value.userType);
    console.log(logInForm.value.password);
    this.send.email = logInForm.value.email;
    this.send.password = logInForm.value.password;
    this.send.role = null;
  }


  saveUser(logInForm): void {
    console.log(logInForm);
    this.assignValuesForTheSendModel(logInForm);
    console.log('login', this.send);
    if (logInForm.valid) {
        this.userService.logIn(this.send).subscribe(
          data => {
            console.log('success!', data);
            for (let i = 0; i < data.body.length; i++) {
              if (data.body[i][2] == this.send.password) {
                this.dataExchangeService.userId = data.body[i][0];
                console.log(data.body[i][0]);
                if (data.body[i][3] == 'vendor') {
                  this.router.navigateByUrl('/vendorprofile');
                  console.log(data[i]);
                } else if (data.body[i][3] == 'planner') {
                  // this.router.navigateByUrl('/plannerprofile');
                  this.router.navigateByUrl('/PlannerProfileEdit');
                } else {
                  this.openSnackBar('Error occurred!');
                }
              } else {
                // this.openSnackBar('Email or Password incorrect.');
              }
            }
          },
          error => {
            this.openSnackBar('Error occurred !');
            console.log('error:');
          }
        );
    }
  }

  openSnackBar(message) {
    this.snackBar.open(message, 'Cancel', {
      duration: 900,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

}

export class SendLogModel {
  email: any;
  role: any;
  password: any;
}
