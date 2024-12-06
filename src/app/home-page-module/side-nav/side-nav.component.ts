import { Component } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

  constructor(private router:Router){}

  // navigateTo(route:string){
  //   this.router.navigate([route])
  // }

}
