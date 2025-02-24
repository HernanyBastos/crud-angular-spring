import { Injectable } from '@angular/core';
import { Courses } from '../models/courses';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = "/assets/courses.json";

  constructor(private httpClient: HttpClient) { }

  list () {
    return this.httpClient.get<Courses[]>(this.API).pipe(
      first(),
      tap(courses => console.log(courses))
    );
  }
}
