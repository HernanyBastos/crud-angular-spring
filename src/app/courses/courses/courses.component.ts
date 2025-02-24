import { Component, OnInit } from '@angular/core';
import { Courses } from '../models/courses';
import { CoursesService } from '../services/courses.service';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  
  
  courses$: Observable<Courses[]>;
  displayedColumns = ["name", "category"];

  //coursesService: CoursesService;
  
  constructor (private coursesService: CoursesService){

    //this.coursesService = new CoursesService();
    //this.courses = this.coursesService.list();

    this.courses$ = this.coursesService.list();
  }

  ngOnInit(): void {
    
  }

}
