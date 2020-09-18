import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  // name = new FormControl('');
  studentform = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    class: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),

    }),
  });
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onSubmit() {
    console.warn(this.studentform.value);
  }

}
