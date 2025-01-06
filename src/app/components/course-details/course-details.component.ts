import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../services/course.service';
import { courseModuletService } from '../services/coursemodule.service';

type CourseType = {
  courseName: string;
  courseType: string;
  courseLevel: string;
  duration: string;
  medium: string;
  moduleCode: string;
  active: number;
  user: string;
};


type CourseModuleType = {
  ModuleId:number;
  ModuleName:string;
};


@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})

export class CourseDetailsComponent implements OnInit {
  course: CourseType = {
    courseName: '',
    courseType: '',
    courseLevel: '',
    duration: '',
    medium: '',
    moduleCode: '',
    active: 0,
    user: 'admin',  // assumption - get current user / data record added user
  };

  courseTypes: string[] = ['Undergraduate', 'Postgraduate', 'Diploma', 'Certificate'];
  courseLevels: string[] = ['Level 1', 'Level 2', 'Level 3', 'Level 4'];
  mediums: string[] = ['English', 'Sinhala', 'Tamil'];



  courseModules: CourseModuleType[] = [];

  constructor(private courseService: CourseService,
              private courseModule: courseModuletService) {}

  ngOnInit(): void {
    // Fetch dynamic data if required for dropdowns
    this.getModuleCodes();
  }

  getModuleCodes(): void {
    this.courseModule.getModules().subscribe(
      (data) => {
        this. courseModules = data;
      },
      (error) => {
        console.error('Error fetching module codes:', error);
      }
    );
  }

  onSubmit(): void {
    if (!this.validateForm()) {
      alert('Please fill out all required fields correctly!');
      return;
    }

    this.courseService.createCourse(this.course).subscribe(
      (response) => {
        console.log('Course Details Submitted:', response);
        alert('Course details submitted successfully!');
        this.resetForm();
      },
      (error) => {
        console.error('Error submitting course details:', error);
      }
    );
  }

  validateForm(): boolean {
    const { courseName, courseType, courseLevel, duration, medium, moduleCode, user } = this.course;

    if (!courseName || !courseType || !courseLevel || !duration || !medium || !moduleCode || !user) {
      return false;
    }

   
    return true;
  }

  resetForm(): void {
    this.course = {
      courseName: '',
      courseType: '',
      courseLevel: '',
      duration: '',
      medium: '',
      moduleCode: '',
      active:0,
      user: '',
    };
  }
}
