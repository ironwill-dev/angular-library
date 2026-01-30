import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup; 

  constructor(
    private fb: FormBuilder,
    private authService: AuthService, 
    private router: Router
  ) {}

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const {username, password} = this.loginForm.value;

    if (username !== 'user' || password !== 'library') {
      this.loginForm.setErrors({ invalidCredentials: true });
      return;
    }

    this.authService.login()
    this.router.navigate(['/dashboard/books']);
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.loginForm.valueChanges.subscribe(() => {
      if (this.loginForm.errors) {
        this.loginForm.setErrors(null);
      }
    })
  }
}
