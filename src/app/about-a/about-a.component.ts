import { Component, AfterViewInit } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-about-a',
  standalone: true,
  imports: [RouterModule,FooterComponent,NgIf],
  templateUrl: './about-a.component.html',
  styleUrl: './about-a.component.css'
})
export class AboutAComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    window.addEventListener('scroll', this.animateOnScroll);
    this.animateOnScroll();
  } 
  currentRoute : string = "";
  constructor(private router: Router) {
    this.currentRoute = this.router.url;
  }
  animateOnScroll = () => {
    const image = document.querySelector('.about-img') as HTMLElement;
    const text = document.querySelector('.about-text') as HTMLElement;

    const windowHeight = window.innerHeight;

    if (image) {
      const imageTop = image.getBoundingClientRect().top;
      if (imageTop < windowHeight - 100) {
        image.classList.add('animate');
        image.style.transform = 'translateX(0)';
        image.style.opacity = '1';
      }
    }

    if (text) {
      const textTop = text.getBoundingClientRect().top;
      if (textTop < windowHeight - 100) {
        text.classList.add('animate');
        text.style.transform = 'translateX(0)';
        text.style.opacity = '1';
      }
    }
  }
}
