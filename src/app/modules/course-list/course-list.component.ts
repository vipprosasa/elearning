import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../components/course-item/course-item.component';
import { courses } from '../database/mock-data';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = courses;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(query => {      
      const { q } = query;
      if (q) {
        this.courses = this.courses.filter(e => e.name.toLowerCase().includes(q.toLowerCase()));
      }
    });
  }
}
