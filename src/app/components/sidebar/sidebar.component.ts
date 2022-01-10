import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../app.module';
import { User } from '../../modules/login/login.component';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menus = [
    {
      link: '/',
      icon: 'home',
      text: 'Trang chủ',
    },
    {
      link: '/courses',
      icon: 'book',
      text: 'Toàn bộ khoá học',
    },
  ];

  currentUser: User;

  constructor(
    private router: Router,
    private commonService: CommonService,
  ) {}

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('login'));
    this.commonService.data$.subscribe(res => {
      if (res && res.type === 'login') {
        this.currentUser = res.data;
      }
    });
  }

  onSearch(e: any) {
    const { value } = e.target;
    this.router.navigateByUrl('/courses?q=' + value);
  }

  logout() {
    if (this.currentUser) {
      localStorage.removeItem('login');
      this.router.navigateByUrl('/');
      this.commonService.nextData({ type: 'logout', data: null });
    }
  }
}
