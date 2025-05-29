import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  // app.ts

  ngAfterViewInit(): void {
    const revealCards: NodeListOf<HTMLElement> = document.querySelectorAll('.reveal');

    const observer: IntersectionObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add('slide-in');
          obs.unobserve(target);
        }
      });
    }, {
      threshold: 0.3,
    });

    revealCards.forEach(card => {
      observer.observe(card);
    });
  }

}
