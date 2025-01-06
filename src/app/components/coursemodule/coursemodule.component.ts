import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { courseModuletService } from '../services/coursemodule.service';

type ModuleType = {
  moduleName: string;
  moduleCode: string;
  active: string;
  user: string;
};

@Component({
  selector: 'app-coursemodule',
  imports: [FormsModule, CommonModule],
  templateUrl: './coursemodule.component.html',
  styleUrls: ['./coursemodule.component.css']
})
export class CoursemoduleComponent implements OnInit {
  courseModules: ModuleType = {
    moduleName: '',
    moduleCode: '',
    active: '',
    user: 'admin'
  };

  constructor(private coureseModule: courseModuletService) {}

  ngOnInit(): void {}

  validateModuleCode(): boolean {
    const validModuleCodePrefix = 'CGP';
    const validModuleNamePrefix = 'NVQ';


    if (
      this.courseModules.moduleCode.startsWith(validModuleCodePrefix) &&
      this.courseModules.moduleName.startsWith(validModuleNamePrefix)
    ) {
      return true; 
    }
    return false; 
  }

  validateForm(): boolean {
    return (
      this.courseModules.moduleName !== '' &&
      this.courseModules.moduleCode !== '' &&
      this.courseModules.active !== '' &&
      this.validateModuleCode()  
    );
  }

  onSubmit(): void {
    if (!this.validateForm()) {
      alert('Please fill out all required fields correctly or ensure the Module Code and Module Name start with the correct prefixes!');
      return;
    }

    this.coureseModule.createModule(this.courseModules).subscribe(
      (response) => {
        console.log('Course Details Submitted:', response);
        alert('Course details submitted successfully!');
      },
      (error) => {
        alert(error);
        console.error('Error submitting course details:', error);
      }
    );
  }

  resetForm(): void {
    this.courseModules = {
      moduleName: '',
      moduleCode: '',
      active: 'yes',
      user: ''
    };
  }
}
