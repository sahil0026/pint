import {Component, Input, Output, EventEmitter} from '@angular/core';
import { AuthenticationService } from '../../../../services/index';
import { Router } from '@angular/router';
import 'style-loader!./baMenuItem.scss';

@Component({
  selector: 'ba-menu-item',
  templateUrl: './baMenuItem.html'
})
export class BaMenuItem {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) {
  }

  @Input() menuItem:any;
  @Input() child:boolean = false;

  @Output() itemHover = new EventEmitter<any>();
  @Output() toggleSubMenu = new EventEmitter<any>();

  public onHoverItem($event):void {
    console.log('inside onHoverItem 1');
    this.itemHover.emit($event);
  }

  public logout($event, item):void {
    debugger;
    console.log('Inside logout function');
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  public onToggleSubMenu($event, item):boolean {
    $event.item = item;
    this.toggleSubMenu.emit($event);
    return false;
  }
}
