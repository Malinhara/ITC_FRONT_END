import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { resultService } from '../services/examResult.service'; // Corrected service name
import { StudentService } from '../services/student.service';

type studentType = {
  Id: number;
  FullName: string;
};

type studentIdType = {
  studentId: number;
};

type resultType = {
  id: number;
  FullName: string;
  CourseYear: string;
  ModuleName: string;
  Marks: number;
};

@Component({
  selector: 'app-student-resultinquire',
  imports: [FormsModule, CommonModule],
  templateUrl: './student-resultinquire.component.html',
  styleUrls: ['./student-resultinquire.component.css']  // Corrected styleUrls
})
export class StudentResultinquireComponent implements OnInit {

  studentId: studentIdType = {
    studentId: 0,
  };

  students: studentType[] = [];
  results: resultType[] = [];

  constructor(
    private studentService: StudentService,
    private examResultInquireService: resultService // Corrected service name
  ) {}

  ngOnInit(): void {
    this.getStudents();  // Fetch the list of students when the component is initialized
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe(
      (data) => {
        this.students = data;  // Set the students array to the fetched data
      },
      (error) => {
        console.error('Error fetching students:', error);  // Handle any errors
      }
    );
  }

  onSearch(): void {
    if (this.studentId.studentId === 0) {
      alert('Please select a valid student.');
      return;
    }

    this.examResultInquireService.getResultById(this.studentId.studentId).subscribe(
      (response: any) => {
        this.results = response;
        console.log('Student Results:', response);
        alert('Student results retrieved successfully!');
      },
      (error: any) => {
        console.error('Error fetching student results:', error);
        alert('Error fetching student results.');
      }
    );
  }

  downloadReport(): void {
    if (this.results.length === 0) {
      alert('No results to download.');
      return;
    }


    const csvData = this.convertToCSV(this.results);


    const blob = new Blob([csvData], { type: 'text/csv' });


    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'student_results.csv';

    
    link.click();
  }

  convertToCSV(results: resultType[]): string {
    const header = ['Student ID - Name', 'Course Year', 'Module Code', 'Marks'];
    const rows = results.map(result => [
      `${result.id} - ${result.FullName}`,
      result.CourseYear,
      result.ModuleName,
      result.Marks
    ]);

    // Combine header and rows to create CSV
    const csv = [header, ...rows].map(row => row.join(',')).join('\n');
    return csv;
  }
}
