import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Ensure FormsModule is imported
import { CourseService } from '../services/course.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-register',
  standalone: true,  // Mark as standalone component
  imports: [FormsModule],  // Import FormsModule here
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {
  student = {
    fullName: '',
    nameWithInitials: '',
    nic: '',
    misNumber: '',
    mobile: '',
    address: '',
    gender: '',
    courseId: null,
    courseYear: null,
    dropout: 0,
    finalExamSitted: 0,
    repeatStudent: 0,
    user: 0
  };

  courses = [];

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
        this.courses = data;  // Assign the fetched courses to the `courses` array
      },
      (error) => {
        console.error('Error fetching courses', error);  // Handle any errors
      }
    );
  }

  
  onSubmit(): void {
    this.studentService.registerStudent(this.student).subscribe(
      (response) => {
        console.log('Student Registered:', response);
      },
      (error) => {
        console.error('Error registering student', error);
      }
    );
  }
}
