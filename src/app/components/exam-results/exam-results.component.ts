import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exam-results',
  imports: [FormsModule],
  templateUrl: './exam-results.component.html',
  styleUrl: './exam-results.component.css'
})
export class ExamResultsComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
examResults: any;

}
