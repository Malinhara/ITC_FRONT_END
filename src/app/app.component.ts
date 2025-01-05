import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CoursemoduleComponent } from './components/coursemodule/coursemodule.component';
import { ExamResultsComponent } from './components/exam-results/exam-results.component';
import { StudentRegisterComponent } from './components/student-register/student-register.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    StudentRegisterComponent, 
    CourseDetailsComponent, 
    CoursemoduleComponent, 
    ExamResultsComponent, 
    StudentRegisterComponent, 
    RouterModule  
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IT Training Center';
}
