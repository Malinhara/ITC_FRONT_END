import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { courseModuletService } from '../services/coursemodule.service';
import { resultService } from '../services/examResult.service';
import { StudentService } from '../services/student.service';

type ExamResultsType = {
  courseYear: number;
  moduleCode: string;
  marks: number;
  user: string;
  StudentId: number;
};

type studentType = {
  Id: number;
  FullName: string;
};

type CourseModuleType = {
  ModuleId: number;
  ModuleName: string;
};

@Component({
  selector: 'app-exam-results',
  imports: [FormsModule, CommonModule],
  templateUrl: './exam-results.component.html',
  styleUrls: ['./exam-results.component.css']
})
export class ExamResultsComponent implements OnInit {

  results: ExamResultsType = {
    courseYear: 0,
    moduleCode: '',
    marks: 0,
    user: 'admin',
    StudentId: 0,  // Initialize with default value
  };

  courseYears: number[] = [2020, 2021, 2022, 2023, 2024, 2025];

  students: studentType[] = [];

  courseModules: CourseModuleType[] = [];

  constructor(private examResultsService: resultService, private studentService: StudentService, private courseModule: courseModuletService) {}

  ngOnInit(): void {
    // Fetch dynamic data for dropdowns
    this.getStudents(); // Fetch students when the component initializes
    
  }

  // Method to fetch modules based on studentId
  getModuleByid(): void {
    const studentId = this.results.StudentId; // Get the selected student ID
    console.log('Selected StudentId:', studentId); // Log to check if the value is correct
    if (!studentId) {
      console.error('No StudentId selected. Cannot fetch course modules.');
      return;
    }

    this.courseModule.getModuleByid(studentId).subscribe(
      (data) => {
        console.log('Fetched Modules:', data); // Log the module data
        this.courseModules = data; // Update the courseModules array
      },
      (error) => {
        console.error('Error fetching module codes for StudentId:', error);
      }
    );
  }

  // Method called when a student is selected
  onStudentSelect(): void {
    console.log('Student selected with ID:', this.results.StudentId); // Log the selected StudentId
    const studentId = this.results.StudentId;
    if (studentId) {
      this.getModuleByid(); // Fetch the modules for the selected student
    }
  }

  // Fetch the students from the backend
  getStudents(): void {
    this.studentService.getStudents().subscribe(
      (data) => {
        this.students = data;
        console.log('Fetched Students:', this.students); // Log the student data to ensure it's being fetched
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }

  // Form submission
  onSubmit(): void {
    // Validation logic for the form can be added here
    if (!this.results.courseYear || !this.results.moduleCode || !this.results.marks || !this.results.user || !this.results.StudentId) {
      alert('Please fill out all required fields correctly!');
      return;
    }

    this.examResultsService.createResult(this.results).subscribe(
      (response) => {
        console.log('Exam Results Submitted:', response);
        alert('Exam results submitted successfully!');
      },
      (error) => {
        console.error('Error submitting exam results:', error);
        alert('There was an error submitting the exam results. Please try again.');
      }
    );
  }
}
