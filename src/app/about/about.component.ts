import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    window.addEventListener('scroll', this.animateOnScroll);
    // Optionally, trigger once on init
    this.animateOnScroll();
  }

  animateOnScroll = () => {
    // const h1 = document.querySelector('.head h1') as HTMLElement;
    const image = document.querySelector('.about-img') as HTMLElement;
    const text = document.querySelector('.about-text') as HTMLElement;

    const windowHeight = window.innerHeight;

    // if (h1) {
    //   const h1Top = h1.getBoundingClientRect().top;
    //   if (h1Top < windowHeight - 100) {
    //     h1.classList.add('animate');
    //     h1.style.transform = 'translateY(0)';
    //     h1.style.opacity = '1';
    //   }
    // }

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
