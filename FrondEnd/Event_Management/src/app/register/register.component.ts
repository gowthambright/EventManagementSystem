import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  bioSection = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    age: new FormControl('', Validators.required),
    gender: new FormControl(''),
    date: new FormControl(''),
    email: new FormControl('', Validators.email),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    addressLine1: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(40),
    ]),
    addressLine2: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(40),
    ]),
    city: new FormControl('', Validators.required),
    district: new FormControl('', Validators.required),
    pincode: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
  });



  constructor(private registerservice: RegisterService) {}

  ngOnInit(): void {}

  onSubmit(data: {
    firstName: string;
    lastName: string;
    age: string;
    gender: string;
    dateOfBirth: Date;
    email: string;
    password: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    district: string;
    pincode: string;
    state: string;
    phoneNumber: string;
  }) {

    alert(JSON.stringify(data));
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age,
      gender: data.gender,
      dateOfBirth: data.dateOfBirth,
      email: data.email,
      password: data.password,
      addressLine1: data.addressLine1,
      addressLine2: data.addressLine2,
      city: data.city,
      district: data.district,
      pincode: data.pincode,
      state: data.state,
      phoneNumber: data.phoneNumber,
    };
    console.log("It's",this.bioSection.valid)
    if (this.bioSection.valid) {
      console.log(1);
      this.registerservice.saveUser(payload).subscribe(
        (data: any) => {
          alert('success');
        },
        (err) => {
          // alert(JSON.stringify(err.error.messsage));
          alert(err.error.message);
        }
      );
    }
    else{
      alert(JSON.stringify("not valid"));
    }
  }
}
