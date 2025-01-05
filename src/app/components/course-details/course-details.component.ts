import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-details',
  imports: [FormsModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
course: any;
onSubmit() {
throw new Error('Method not implemented.');
}

}
