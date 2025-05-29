import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import Typed, { TypedOptions } from 'typed.js';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { ServiceComponent } from '../service/service.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule,AboutComponent,ServiceComponent,SkillsComponent,PortfolioComponent],
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
