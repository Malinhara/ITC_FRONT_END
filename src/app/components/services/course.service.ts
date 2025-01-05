import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Fetch all courses
  getCourses(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
