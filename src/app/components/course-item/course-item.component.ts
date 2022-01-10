import { Component, Input } from '@angular/core';

export interface Lesson {
  order: number;
  name: string;
  videoUrl: string;
  totalTime: string;
  lessonNeedCompleted: number;
  isCompleted: boolean;
}

export interface Course {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  startDate: Date;
  totalTime: number;
  lecturers: string[];
  lessons: Lesson[];
}

@Component({
  selector: 'course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent {
  @Input()
  course!: Course;
}
