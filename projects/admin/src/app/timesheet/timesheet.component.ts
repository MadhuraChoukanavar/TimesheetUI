import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule


@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrl: './timesheet.component.css'
})
export class TimesheetComponent {
  tasks = [
    // Initial task
    { project: '', task: '', billingType: '', days: Array(7).fill('') }
  ];

  addTaskRow() {
    // Add a new task with default values
    this.tasks.push({ project: '', task: '', billingType: '', days: Array(7).fill('') });
  }
 
  submit() {
    // Handle the form submission
    console.log(this.tasks);
  }
}

