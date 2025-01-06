import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses'; 
  private courseCreate = 'http://localhost:3000/courses/create'; 

  constructor(private http: HttpClient) {}

  // Fetch all courses
  getCourses(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  
  // Method to register a new student
  createCourse(course: any): Observable<any> {
    return this.http.post(this.courseCreate ,course);
  }
}
