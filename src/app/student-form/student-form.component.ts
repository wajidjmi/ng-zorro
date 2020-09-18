import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  name:any;
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
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.callApi();
    console.log('I am .....');
  }

  // tslint:disable-next-line: typedef
  onSubmit() {
    console.warn(this.studentform.value);


  }

  callApi() {
    console.log('I am called1');
    let url = 'https://run.mocky.io/v3/d4e1a7f2-0648-424f-8180-e9646cf4e948';
    this.http.get(url).subscribe(data => {
      console.log(data);
      this.name = data["name"];
    });
  }

}
