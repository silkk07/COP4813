import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.scss']
})
export class Assignment3Component implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  addressFormControl = new FormControl('', [
    Validators.required,
  ]);
  phoneNumberFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)
  ]);
  birthDateFormControl = new FormControl('', [
    Validators.required,
  ]);
  commentsFormControl = new FormControl('', [
    Validators.required,
  ]);
  isConfirmationMode = false;
  assignment3Form = new FormGroup({
    email: this.emailFormControl,
    name: this.nameFormControl,
    address: this.addressFormControl,
    phoneNumber: this.phoneNumberFormControl,
    birthDate: this.birthDateFormControl,
    comments: this.commentsFormControl



  });
  securityQuestionFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/[Tt]rump/)
  ]);
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const bodyText = `Email: ${this.emailFormControl.value}
    Name: ${this.nameFormControl.value}
    Address: ${this.addressFormControl.value}
    phoneNumber: ${this.phoneNumberFormControl.value}
    birthDate: ${this.birthDateFormControl.value}
    Comments: ${this.commentsFormControl.value}`;
    window.open('mailto:chandon_otten@daytonastate.edu?body=' + bodyText);
  }
}
