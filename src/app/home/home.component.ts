import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import Typed, { TypedOptions } from 'typed.js';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { ServiceComponent } from '../service/service.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterModule,AboutComponent,ServiceComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  options: TypedOptions = {
    strings: ["Ahsan Akhtar" ,"Web Developer", "Software Engineer", "Designer","Ahsan Akhtar"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: false
  };

  ngOnInit() {
    const typed = new Typed(".text", this.options);
  }
}
