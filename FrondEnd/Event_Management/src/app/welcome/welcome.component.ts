import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WelcomeService } from '../welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  allUsers: any;

  popUpForm!: FormGroup;

  constructor(
    private welcomeservice: WelcomeService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDetails();
    this.popUpForm = this.formBuilder.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.compose([Validators.required])],
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      pincode: ['', Validators.required],
      state: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }
  getAllDetail(id: any): void {
    this.welcomeservice.getAllDetail(id).subscribe((response: any) => {
      this.popUpForm.patchValue(response);
      console.log('response', response);
      console.log('updateForm', this.popUpForm.value);
    });
  }
  delete(id: number) {
    if (confirm('Are you sure you want to delete?')) {
      this.welcomeservice.delete(id).subscribe((data: any) => {
        alert(JSON.stringify(data));
        this.getDetails();
      });
    }
  }
  getDetails(): void {
    this.welcomeservice.getAllDetails().subscribe((response: any) => {
      this.allUsers = response;
    });
  }
  createForm() {
    this.popUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.compose([Validators.required])],
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      pincode: ['', Validators.required],
      state: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }
  onSubmit() {
    console.log(this.popUpForm.value);
    if (this.popUpForm.valid) {
      this.welcomeservice.saveData(this.popUpForm.value).subscribe(
        (response: any) => {
          alert('Success');
        },
        (err) => {
          alert(err.error.message);
        }
      );
    }
  }
  update() {
    console.log(this.popUpForm.value);
    this.welcomeservice.getAllDetail(this.popUpForm.value).subscribe(
      (response: any) => {
        alert('Success');
        this.getDetails();
      },
      (err) => {
        alert(err.error.errorMessage);
      }
    );
  }
}
