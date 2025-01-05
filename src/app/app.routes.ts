
import { Routes } from '@angular/router';
import { StudentRegisterComponent } from './components/student-register/student-register.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CoursemoduleComponent } from './components/coursemodule/coursemodule.component';
import { ExamResultsComponent } from './components/exam-results/exam-results.component';
import { StudentResultinquireComponent } from './components/student-resultinquire/student-resultinquire.component';

export const routes: Routes = [
  { path: '', redirectTo: '/student-register', pathMatch: 'full' },
  { path: 'student-register', component: StudentRegisterComponent },
  { path: 'course-details', component: CourseDetailsComponent },
  { path: 'course-module', component: CoursemoduleComponent },
  { path: 'exam-results', component: ExamResultsComponent },
  { path: 'exam-result-inquire', component: StudentResultinquireComponent}
];

