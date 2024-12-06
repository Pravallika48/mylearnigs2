import { Component } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrl: './landing-screen.component.css'
})
export class LandingScreenComponent {
  constructor(private userService:UserService){}
  ngOnInit(): void {
  }
}
