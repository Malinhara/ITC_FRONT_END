import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'http://localhost:3000/students/register'; 
  private apigetstuudents = 'http://localhost:3000/students'; 

  constructor(private http: HttpClient) {}

  // Method to register a new student
  registerStudent(student: any): Observable<any> {
    return this.http.post(this.apiUrl, student);
  }

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.apigetstuudents);  // Fetch all exam results
  }


}
