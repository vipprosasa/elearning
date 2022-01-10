import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CommonService } from '../../app.module';
import { users } from '../database/mock-data';

export interface User {
  username: string;
  password: string;
  fullname: string;
  profileUrl: string;
}

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private notification: NzNotificationService,
    private router: Router,
    private commonService: CommonService,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submitForm() {
    if (!this.form.valid) {
      this.notification.create(
        'error',
        'Login',
        'Vui lòng nhập thông tin đăng nhập'
      );
      return;
    }

    const { username, password } = this.form.getRawValue();
    const user = users.find(e => (e.username === username && e.password === password));
    if (!user) {
      this.notification.create(
        'error',
        'Login',
        'Sai tài khoản hoặc mật khẩu'
      );
      return;
    }

    delete user.password;
    localStorage.setItem('login', JSON.stringify(user));
    this.commonService.nextData({ type: 'login', data: user });
    this.router.navigateByUrl('/courses');
  }
}
