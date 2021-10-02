import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  isSidebarOpen = new Subject<boolean>();

  constructor() { }

  setSidebarState(data: boolean) {
    this.isSidebarOpen.next(data);
  }

  getSidebarState(): Observable<boolean> {
    return this.isSidebarOpen.asObservable();
  }
}
