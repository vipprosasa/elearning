import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course, Lesson } from '../../components/course-item/course-item.component';
import { courses } from '../database/mock-data';

@Component({
  selector: 'course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  course: Course;
  currentLesson: Lesson;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const { slug } = params;
      if (slug) {
        this.course = courses.find(e => e.slug === slug);        
        this.currentLesson = this.course && this.course.lessons && this.course.lessons[0];
      }
    });
  }

  clickLesson(item: Lesson) {
    this.currentLesson = item;
  }
}
