import {Component, OnInit} from '@angular/core';
import {FormGroup, AbstractControl} from '@angular/forms';

import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { AuthenticationService } from '../../theme/services/index';

import 'style-loader!./login.scss';

@Component({
  selector: 'login',
  templateUrl: './login.html',
})
export class Login implements OnInit{

  public form:FormGroup;
  // public email:AbstractControl;
  // public password:AbstractControl;
  public submitted:boolean = false;

  email: string = 'pintdemo@geminisolutions.in';
  password: string = '12345';

  constructor(
    // fb:FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService) {
    // this.form = fb.group({
    //   'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    //   'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    // });

    // this.email = this.form.controls['email'];
    // this.password = this.form.controls['password'];
  }

  ngOnInit() {
      // reset login status
      this.authenticationService.logout();
  }

  public onSubmit():void {
    this.submitted = true;
    // if (this.form.valid) {
      // your code goes here
      console.log('Email: ' + this.email);
      this.authenticationService.login(this.email, this.password)
        .subscribe(result => {
            console.log('Inside login response: ' + result);
            if (result === true) {
                this.router.navigate(['/']);
            } else {
                // this.error = 'Username or password is incorrect';
                // this.loading = false;
            }
        });
    // }
  }
}
