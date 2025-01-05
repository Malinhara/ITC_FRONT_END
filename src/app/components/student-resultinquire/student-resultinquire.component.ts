import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-resultinquire',
  imports: [FormsModule],
  templateUrl: './student-resultinquire.component.html',
  styleUrl: './student-resultinquire.component.css'
})
export class StudentResultinquireComponent {
inquiryData: any;
onSearch() {
throw new Error('Method not implemented.');
}
downloadReport: any;

}
