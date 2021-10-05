import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  public openSearch: boolean = false;
  public openDropdown: boolean = false;
  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // document.addEventListener(
    //   'click',
    //   (e) => {
    //     if (this.openDropdown) {
    //       this.openDropdown = false;
    //     }
    //   }
    // );
  }

}
