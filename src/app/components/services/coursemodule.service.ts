import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class courseModuletService {

  private apiUrl = 'http://localhost:3000/course-modules';  // Endpoint for exam results
  
  private createUrl = 'http://localhost:3000/course-modules/create';  

  constructor(private http: HttpClient) {}


 
  getModules(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); 
  }

  createModule(courseModules: any): Observable<any> {
    return this.http.post(this.createUrl,courseModules);
  }

  getModuleByid(studentId: number): Observable<any[]> {
    const url = `${this.apiUrl}/${studentId}`; 
    return this.http.get<any[]>(url);
  }
}



