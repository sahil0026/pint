import {Component, OnInit} from '@angular/core';

import {GlobalState} from '../../../global.state';
import { AuthenticationService } from '../../services/index';
import { UserService } from '../../services/users/index';
import { Router } from '@angular/router';

import 'style-loader!./baPageTop.scss';

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
})
export class BaPageTop {

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;

  constructor(private _state:GlobalState,
    private userService: UserService) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
    this.user = {};
  }

  ngOnInit() {
    // get users from secure api end point
    this.userService.getUsers()
      .subscribe(user => {
        console.log('user : ' , user);
        debugger;
          this.user = user;

      });
  }

  public logout($event):void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
}
