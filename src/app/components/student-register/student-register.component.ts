import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Ensure FormsModule is imported
import { CourseService } from '../services/course.service';
import { StudentService } from '../services/student.service';

type CourseType = {
  CD_ID: number;
  CourseName: string;
};


type StudentType = {
  fullName: string;
  nameWithInitials: string;
  nic: string;
  misNumber: string;
  mobile: string;
  address: string;
  gender: string;
  courseId: number; 
  courseYear: number; 
  dropout: number;
  finalExamSitted: number;
  repeatStudent: number;
  user: number;
};



@Component({
  selector: 'app-student-register',
  standalone: true,  // Mark as standalone component
  imports: [FormsModule, CommonModule],  // Import FormsModule here
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})


export class StudentRegisterComponent implements OnInit {
  student: StudentType = {
    fullName: '',
    nameWithInitials: '',
    nic: '',
    misNumber: '',
    mobile: '',
    address: '',
    gender: '',
    courseId: 0, // Initialized with a default number
    courseYear: 0, 
    dropout: 0,
    finalExamSitted: 0,
    repeatStudent: 0,
    user: 1
  };
  
  courses: CourseType[] = [];

  constructor(
    private studentService: StudentService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses().subscribe(
      (data) => {
        this.courses = data;
      },
      (error) => {
        console.error('Error fetching courses', error);
      }
    );
  }

  onSubmit(): void {
    if (!this.validateForm()) {
      alert('Please fill out all required fields correctly!');
      return;
    }

    this.studentService.registerStudent(this.student).subscribe(
      (response) => {
        console.log('Student Registered:', response);
        alert('Student registered successfully!');
      },
      (error) => {
        console.error('Error registering student', error);
      }
    );
  }

  validateForm(): boolean {
    const { fullName, nameWithInitials, nic, misNumber, mobile, address, gender, courseId, courseYear, user } = this.student;

    if (!fullName || !nameWithInitials || !nic || !misNumber || !mobile || !address || !gender || !courseId || !courseYear || !user) {
      return false;
    }

   
    if (!/^[a-zA-Z0-9]{10,12}$/.test(nic)) {
      alert('NIC must be 10-12 alphanumeric characters.');
      return false;
    }

   
    if (!/^\d{10}$/.test(mobile)) {
      alert('Mobile number must be 10 digits.');
      return false;
    }

    return true;
  }
}