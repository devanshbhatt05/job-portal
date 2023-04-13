import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    // Send login request to the server
    this.http
      .post('/api/login', { email, password })
      .subscribe((response) => {
        // Login successful, navigate to home page
        this.router.navigate(['/']);
      });
  }
}
