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
  public submitted:boolean = false;

  email: string = 'pintdemo@geminisolutions.in';
  password: string = '12345';
  error: string;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
      // reset login status
      this.authenticationService.logout();
  }

  public onSubmit():void {
    this.submitted = true;
    // if (this.form.valid) {
      console.log('Email: ' + this.email);
      this.authenticationService.login(this.email, this.password)
        .subscribe(result => {
            console.log('Inside login response: ' + result);
            if (result === true) {
                this.router.navigate(['/']);
            } else {
                this.error = 'Invalid Credentials';
                // this.loading = false;
            }
        });
    // }
  }
}
