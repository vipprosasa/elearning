import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './modules/home/home.component';
import { CourseListComponent } from './modules/course-list/course-list.component';
import { CourseDetailComponent } from './modules/course-detail/course-detail.component';
import { LoginComponent } from './modules/login/login.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { BehaviorSubject } from 'rxjs';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Injectable()
export class CommonService {
  private data = new BehaviorSubject(null);
  data$ = this.data.asObservable();

  nextData(data: { type: string, data: any }) {
    this.data.next(data)
  }
}

@NgModule({
  declarations: [
    SafePipe,
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    CourseListComponent,
    CourseDetailComponent,
    LoginComponent,
    CourseItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // antd
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzInputModule,
    NzAvatarModule,
    NzGridModule,
    NzFormModule,
    NzButtonModule,
    NzNotificationModule,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
