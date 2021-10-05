import { Component, Input, OnInit } from '@angular/core';
import { MenuConfig, MenuItem } from '../../configs/sidebar.config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  open = true;

  constructor() {
    // this.sidebarConfig = MenuConfig;
  }

  ngOnInit(): void {
  }

}
