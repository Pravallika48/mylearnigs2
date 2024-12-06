import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], 
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
    this.loginForm = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)], 
      ],
      password: [
        '', 
        [Validators.required],
      ],
    });
  }

  ngOnInit(): void {}

  onSubmission() {
    const loginReq = this.loginForm.value;
    if (loginReq.username === 'pravallika' && loginReq.password === '1234') {
      this.userService.setUsername(loginReq.username)
      this.router.navigate(['/home']);
    } else {
      alert('Invalid username or password');
    }
  }
}
