import { Component } from '@angular/core';
import { SharedService } from './shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'frontend';
  sidebarOpen: boolean;

  constructor(
    private sharedService: SharedService
  ) {
    sharedService.getSidebarState().subscribe(
      state => this.sidebarOpen = state
    );
  }
}
