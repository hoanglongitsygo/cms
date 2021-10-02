import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dropdownOpen = false
  sidebarOpen: boolean;
  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.getSidebarState().subscribe(
      state => this.sidebarOpen = state
    );
  }

  openSidebar() {
    this.sharedService.setSidebarState(true);
  }

}
