import { Component, OnInit } from '@angular/core';
// Example in your view-profile component
import 'bootstrap/dist/js/bootstrap.min.js';


@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.css'
})
export class ViewProfileComponent implements OnInit{

  employeeId = '123';
  constructor() {}

  ngOnInit(): void {}
}
