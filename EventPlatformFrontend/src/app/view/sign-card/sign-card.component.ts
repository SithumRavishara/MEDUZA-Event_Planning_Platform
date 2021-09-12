import { Component, OnInit, ViewChild } from '@angular/core';
import 'src/app/dto/user';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-card',
  templateUrl: './sign-card.component.html',
  styleUrls: ['./sign-card.component.css']
})
export class SignCardComponent implements OnInit {

  allowtoChoose = false;
  passwordMatch = false;

  private userType: any;

  user: User;

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    userType: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    passwordCheck: new FormControl('', Validators.required),
  });

  constructor(private signupService: UserService,  private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit() {
  }

  type: Food[] = [
    {value: 'vendor', viewValue: 'Vendor'},
    {value: 'planner', viewValue: 'Planner'}
  ];

  send: SendModel = {
    email: '',
    password: '',
    role: '',
  }

  getErrorMessage() {
    if (this.signInForm.controls.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.signInForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.signInForm.controls.password.hasError('required')) {
      return 'You must enter a Password';
    }
    return this.signInForm.controls.password.hasError('minLength') ? 'Not a valid Password, Need minimum six characters.' : '';
  }

  getPasswordCheckErrorMessage() {
    if (this.signInForm.controls.passwordCheck.hasError('required')) {
      return 'Password does not match.';
    }
    return this.signInForm.controls.passwordCheck.hasError('minLength') ? 'Not a valid Password' : '';
  }

  getOptionValue(value) {
    this.userType = value.value;
    console.log(this.userType);
  }

  assignValuesForTheSendModel(signInForm) {
    console.log(signInForm.value.email);
    console.log(signInForm.value.userType);
    console.log(signInForm.value.password);
    this.send.email = signInForm.value.email;
    this.send.role = this.userType;
    this.send.password = signInForm.value.password;
  }

  saveUser(signInForm): void {
    console.log(signInForm);
    this.assignValuesForTheSendModel(signInForm);
    console.log('register', this.send);
    if (signInForm.valid) {
      if (signInForm.value.password == signInForm.value.passwordCheck) {
        this.signupService.register(this.send).subscribe(
          data => {
            this.openSnackBar('Signup Success!');
            console.log('success!');
            this.router.navigateByUrl('/login');
          },
          error => {
            console.log('error:');
            this.openSnackBar('Unexpected error occurred!');
          }
        );
      } else {
        this.openSnackBar('Password does not match!');
        // this.passwordMatch = true;
      }
    } else {
      this.openSnackBar('Please fill the form correctly.');
    }
  }

  openSnackBar(message) {
    this.snackBar.open(message, 'Cancel', {
      duration: 800,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }


}

export class SendModel {
  email: any;
  role: any;
  password: any;
}

interface Food {
  value: string;
  viewValue: string;
}

// export function MustMatch(controlName: string, matchingControlName: string) {
//   return (formGroup: FormGroup) => {
//     const control = formGroup.controls[controlName];
//     const matchingControl = formGroup.controls[matchingControlName];
//
//     if (matchingControl.errors && !matchingControl.errors.mustMatch) {
//       // return if another validator has already found an error on the matchingControl
//       return;
//     }
//
//     // set error on matchingControl if validation fails
//     if (control.value !== matchingControl.value) {
//       matchingControl.setErrors({ mustMatch: true });
//     } else {
//       matchingControl.setErrors(null);
//     }
//   };
// }
