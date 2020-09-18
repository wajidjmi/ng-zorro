import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-my-first-zorro-form',
  templateUrl: './my-first-zorro-form.component.html',
  styleUrls: ['./my-first-zorro-form.component.css']
})



export class MyFirstZorroFormComponent implements OnInit {
  validateForm!: FormGroup;
  name = "default";
  pass="default";

  submitForm(): void {
    // tslint:disable-next-line: forin
    // for (const i in this.validateForm.controls) {
    //   this.validateForm.controls[i].markAsDirty();
    //   this.validateForm.controls[i].updateValueAndValidity();
    //   console.log(this.validateForm.controls[i].value);
    // }
    this.name = this.validateForm.controls.userName.value;
    this.pass = this.validateForm.controls.password.value;

  }


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
