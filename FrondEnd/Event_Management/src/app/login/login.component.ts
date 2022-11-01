import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginSection = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required),
  });

  constructor(private loginservice: LoginService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.loginSection.value);
    if (this.loginSection.valid) {
      this.loginservice.user(this.loginSection.value).subscribe(
        (data: any) => {
          this.router.navigate(['/welcome']);
        },
        (err) => {
          alert(err.error.message)
        }
      );
    }
  }
}
