import { Component, OnInit } from '@angular/core';
import { CommonService } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed = true;
  authenticated = false;

  constructor(
    private commonService: CommonService,
  ) { }

  ngOnInit() {
    this.authenticated = !!localStorage.getItem('login');
    this.commonService.data$.subscribe(res => {
      if (res && res.type === 'login') {
        this.authenticated = true;
      }
      if (res && res.type === 'logout') {
        this.authenticated = false;
        this.isCollapsed = true;
      }
    });
  }
}
