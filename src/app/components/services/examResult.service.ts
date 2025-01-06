import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class resultService {

        private apiUrl = 'http://localhost:3000/exam-results/create';  // Endpoint for creating exam results
        private apiGetResultUrl = 'http://localhost:3000/exam-results';  // Endpoint for fetching exam results
      
        constructor(private http: HttpClient) {}
      
        // POST method to create a new result
        createResult(results: any): Observable<any> {
          return this.http.post(this.apiUrl, results);
        }
      
        // GET method to fetch a specific result by ID
        getResultById(studentId: number): Observable<any> {
            const url = `${this.apiGetResultUrl}/studentId`;  // Endpoint for exam results by student
            return this.http.post(url, { studentId });  // Send studentId in the request body
          }
      
}
